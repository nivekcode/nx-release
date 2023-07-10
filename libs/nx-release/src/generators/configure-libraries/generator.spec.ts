import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { configureLibrariesGenerator } from './generator';
import { ConfigureLibrariesGeneratorSchema } from './schema';

describe('configure-libraries generator', () => {
  let tree: Tree;
  const options: ConfigureLibrariesGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await configureLibrariesGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
