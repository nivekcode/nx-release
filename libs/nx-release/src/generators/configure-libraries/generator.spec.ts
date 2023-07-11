import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import * as inquirer from 'inquirer'
import { Tree } from '@nx/devkit';

import * as libraryGenerator from '../configure-library/generator';
import * as projectHelpers from '../helpers/projects.helpers';
import * as spinnerHelper from '../helpers/spinner.helper';

import { configureLibrariesGenerator } from './generator';
import * as process from "process";

describe('configure-libraries generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    jest.spyOn(spinnerHelper, 'getSpinner').mockReturnValue(({
        start: jest.fn(),
        succeed: jest.fn(),
        fail: jest.fn(),
      }) as any
    );
  });

  it('should log an error message if no library projects are found', done => {
    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(projectHelpers, 'getLibraryProjectNames').mockReturnValue([]);
    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(process, 'exit').mockImplementation((() => {
      done();
    }) as any);

    configureLibrariesGenerator(tree, {} as any);
  });

  it('should call the configureLibraryGenerator for each selected project', async () => {
    const selectedProjects = ['foo', 'bar'];

    jest.spyOn(libraryGenerator, 'configureLibraryGenerator').mockImplementation(() => Promise.resolve());
    jest.spyOn(inquirer, 'prompt').mockImplementation(() => Promise.resolve({
      selectedProjects
    }));

    await configureLibrariesGenerator(tree, {
      publicPublishConfig: true
    });

    expect(libraryGenerator.configureLibraryGenerator).toHaveBeenCalledTimes(2);
    expect(libraryGenerator.configureLibraryGenerator).toHaveBeenCalledWith(tree, {
      libName: selectedProjects[0],
      publicPublishConfig: true
    });
    expect(libraryGenerator.configureLibraryGenerator).toHaveBeenCalledWith(tree, {
      libName: selectedProjects[1],
      publicPublishConfig: true
    });
  });
});
