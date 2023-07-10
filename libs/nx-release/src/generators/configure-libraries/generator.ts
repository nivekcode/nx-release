import {formatFiles, Tree,} from '@nx/devkit';

import {getLibraryProjectNames} from "../helpers/projects";
import configureLibraryGenerator from "../configure-library/generator";

import {ConfigureLibrariesGeneratorSchema} from './schema';

export async function configureLibrariesGenerator(
  tree: Tree,
  options: ConfigureLibrariesGeneratorSchema
) {

  const libraryProjects = getLibraryProjectNames(tree);

  for (const libName of libraryProjects) {
    await configureLibraryGenerator(tree, {libName});
  }
  await formatFiles(tree);
}

export default configureLibrariesGenerator;
