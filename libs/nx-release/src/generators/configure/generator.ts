import {formatFiles, Tree,} from '@nx/devkit';

import {configureWorkspaceGenerator} from "../configure-workspace/generator";
import {configureLibrariesGenerator} from "../configure-libraries/generator";

import {ConfigureGeneratorSchema} from './schema';

export async function configureGenerator(
  tree: Tree,
  options: ConfigureGeneratorSchema
) {
  const {publicPublishConfig, installDeps, generateGhActions, generateReleaseConfig} = options;
  await configureWorkspaceGenerator(tree, {installDeps, generateGhActions, generateReleaseConfig});
  await configureLibrariesGenerator(tree, {publicPublishConfig});

  await formatFiles(tree);
}

export default configureGenerator;
