import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing';
import {Tree} from '@nx/devkit';

import * as workspaceGenerator from "../configure-workspace/generator";
import * as libraryGenerator from "../configure-libraries/generator";

import {configureGenerator} from './generator';

describe('configure generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {

    const options = {
      installDeps: true,
      generateGhActions: true,
      generateReleaseConfig: true,
      publicPublishConfig: true
    }

    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(workspaceGenerator, 'configureWorkspaceGenerator').mockImplementation(() => Promise.resolve());

    // eslint disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(libraryGenerator, 'configureLibrariesGenerator').mockImplementation(() => Promise.resolve());

    await configureGenerator(tree, options);

    expect(workspaceGenerator.configureWorkspaceGenerator).toHaveBeenCalledWith(tree, {
      installDeps: options.installDeps,
      generateGhActions: options.generateGhActions,
      generateReleaseConfig: options.generateReleaseConfig
    });

    expect(libraryGenerator.configureLibrariesGenerator).toHaveBeenCalledWith(tree, {
      publicPublishConfig: options.publicPublishConfig
    });
  });
});
