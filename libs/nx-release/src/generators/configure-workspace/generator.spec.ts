import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing';
import {Tree} from '@nx/devkit';

import * as childProcess from 'child_process';
import * as nXdevKit from '@nx/devkit';
import * as spinnerHelper from '../helpers/spinner.helper';

import {configureWorkspaceGenerator} from './generator';

describe('configure-workspace generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    jest.spyOn(spinnerHelper, 'getSpinner').mockReturnValue(({
        start: jest.fn(),
        succeed: jest.fn(),
      }) as any
    );
  });

  it('should install the dependencies if the "installDeps" flag is set', async () => {
    const options = {
      installDeps: true
    };

    jest.spyOn(childProcess, 'execSync').mockImplementation((() => {
    }) as any);

    await configureWorkspaceGenerator(tree, options);
    expect(childProcess.execSync).toHaveBeenCalledWith(`npm i -D @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/exec @semantic-release/git @semantic-release/release-notes-generator nx-release replace-json-property conventional-changelog-conventionalcommits --force`);
  });

  it('should generate the release config if the "generateReleaseConfig" flag is set', async () => {
    const options = {
      generateReleaseConfig: true
    };

    jest.spyOn(childProcess, 'execSync').mockImplementation((() => {
    }) as any);
    jest.spyOn(nXdevKit, 'generateFiles').mockImplementation((() => {
    }) as any);

    await configureWorkspaceGenerator(tree, options);
    expect(nXdevKit.generateFiles).toHaveBeenCalled();
  });
});
