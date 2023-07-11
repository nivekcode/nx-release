import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing';
import {readJson, Tree} from '@nx/devkit';
import * as inquirer from 'inquirer';

import * as projectHelpers from '../helpers/projects.helpers';
import * as spinnerHelper from "../helpers/spinner.helper";

import {configureLibraryGenerator} from './generator';
import {libraryGenerator} from "@nx/js";

describe('configure-library generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    jest.spyOn(spinnerHelper, 'getSpinner').mockReturnValue(({
        start: jest.fn(),
        succeed: jest.fn(),
        fail: jest.fn()
      }) as any
    );
  });

  it('should prompt for project if no library name was provided', async () => {
    const mockProjectNames = ['foo', 'bar'];

    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(inquirer, 'prompt').mockImplementation(() => Promise.resolve({name: 'test'}));

    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(projectHelpers, 'getLibraryProjectNames').mockReturnValue(mockProjectNames);

    await configureLibraryGenerator(tree, {});

    expect(inquirer.prompt).toHaveBeenCalledWith({
      type: 'list',
      name: 'selectedProject',
      choices: mockProjectNames
    });
  });

  it('should add the executor to the project.json', async () => {
    const libName = 'foo';
    const expectedExecutorConfig = {
      executor: 'nx-release:build-update-publish',
      options: {
        libName
      }
    };

    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(inquirer, 'prompt').mockImplementation(() => Promise.resolve({selectedProject: libName}));
    jest.spyOn(projectHelpers, 'getLibraryProjectNames').mockReturnValue([libName]);
    jest.spyOn(projectHelpers, 'getLibraryRoot').mockReturnValue(`${libName}`);

    await libraryGenerator(tree, {name: libName});
    await configureLibraryGenerator(tree, {libName});

    const projectJson = readJson(tree, `${libName}/project.json`)
    expect(projectJson.targets['release']).toEqual(expectedExecutorConfig);
  });

  it('should not add a public publish config if the "publicPublishConfig" was not set', async () => {
    const libName = 'foo';

    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(inquirer, 'prompt').mockImplementation(() => Promise.resolve({selectedProject: libName}));
    jest.spyOn(projectHelpers, 'getLibraryProjectNames').mockReturnValue([libName]);
    jest.spyOn(projectHelpers, 'getLibraryRoot').mockReturnValue(`${libName}`);

    await libraryGenerator(tree, {name: libName});
    await configureLibraryGenerator(tree, {libName});

    const packageJson = readJson(tree, `${libName}/package.json`)
    expect(packageJson.publishConfig).not.toBeDefined();
  });

  it('should add a public publish config if the "publicPublishConfig" was set to true', async () => {
    const libName = 'foo';
    const expectedPublishConfig = {access: 'public'}

    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(inquirer, 'prompt').mockImplementation(() => Promise.resolve({selectedProject: libName}));
    jest.spyOn(projectHelpers, 'getLibraryProjectNames').mockReturnValue([libName]);
    jest.spyOn(projectHelpers, 'getLibraryRoot').mockReturnValue(`${libName}`);

    await libraryGenerator(tree, {name: libName});
    await configureLibraryGenerator(tree, {libName, publicPublishConfig: true});

    const packageJson = readJson(tree, `${libName}/package.json`)
    expect(packageJson.publishConfig).toEqual(expectedPublishConfig);
  });
});
