import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing';
import {Tree} from '@nx/devkit';
import * as inquirer from 'inquirer';

import * as projectHelpers from '../helpers/projects.helpers';
import * as spinnerHelper from "../helpers/spinner.helper";

import {configureLibraryGenerator} from './generator';

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
});
