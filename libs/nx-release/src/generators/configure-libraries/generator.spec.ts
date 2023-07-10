import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree } from '@nx/devkit';

import * as projectHelpers from '../helpers/projects.helpers';
import * as spinnerHelper from "../helpers/spinner.helper";

import { configureLibrariesGenerator } from './generator';
import * as process from "process";


describe('configure-libraries generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    jest.spyOn(spinnerHelper, 'getSpinner').mockReturnValue(({
        start: jest.fn(),
        succeed: jest.fn(),
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
});
