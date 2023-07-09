import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { configureWorkspaceGenerator } from './generator';
import { ConfigureWorkspaceGeneratorSchema } from './schema';

describe('configure-workspace generator', () => {
  let tree: Tree;
  const options: ConfigureWorkspaceGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await configureWorkspaceGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
