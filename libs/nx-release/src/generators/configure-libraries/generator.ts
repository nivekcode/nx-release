import {formatFiles, Tree,} from '@nx/devkit';
import * as inquirer from 'inquirer';

import {getLibraryProjectNames} from "../helpers/projects";
import configureLibraryGenerator from "../configure-library/generator";

import {ConfigureLibrariesGeneratorSchema} from './schema';

export async function configureLibrariesGenerator(
  tree: Tree,
  options: ConfigureLibrariesGeneratorSchema
) {
  const {publicPublishConfig} = options;
  const libraryProjects = getLibraryProjectNames(tree);

  const projectsPrompt = await inquirer.prompt({
    type: 'checkbox',
    name: 'selectedProjects',
    choices: libraryProjects
  });

  const selectedProjects = projectsPrompt.selectedProjects;

  for (const libName of selectedProjects) {
    await configureLibraryGenerator(tree, {libName, publicPublishConfig});
  }

  await formatFiles(tree);
}

export default configureLibrariesGenerator;
