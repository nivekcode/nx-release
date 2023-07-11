import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing';
import * as nxDevkit from '@nx/devkit';
import {Tree} from '@nx/devkit';

import {generateReleaseConfigGenerator} from './generator';
import {GenerateReleaseConfigGeneratorSchema} from './schema';

describe('generate-release-config generator', () => {
  let tree: Tree;
  const options: GenerateReleaseConfigGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate the release config', async () => {
    jest.spyOn(nxDevkit, 'generateFiles').mockImplementation(() => {});

    await generateReleaseConfigGenerator(tree, options);
    expect(nxDevkit.generateFiles).toHaveBeenCalled();
  });
});
