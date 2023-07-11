import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing';
import * as nxDevkit from '@nx/devkit';
import {Tree} from '@nx/devkit';

import {GenerateGhActionsGeneratorSchema} from './schema';
import generateReleaseConfigGenerator from "../generate-release-config/generator";

describe('generate-gh-actions generator', () => {
  let tree: Tree;
  const options: GenerateGhActionsGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate the GitHub actions', async () => {
    jest.spyOn(nxDevkit, 'generateFiles').mockImplementation(() => {});

    await generateReleaseConfigGenerator(tree, options);
    expect(nxDevkit.generateFiles).toHaveBeenCalled();
  });
});
