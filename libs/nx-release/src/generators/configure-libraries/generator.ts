import {formatFiles, Tree,} from '@nx/devkit';
import * as inquirer from 'inquirer';

import {getLibraryProjectNames} from "../helpers/projects.helpers";
import {configureLibraryGenerator} from "../configure-library/generator";

import {ConfigureLibrariesGeneratorSchema} from './schema';
import * as chalk from "chalk";

export async function configureLibrariesGenerator(
  tree: Tree,
  options: ConfigureLibrariesGeneratorSchema
) {
  const {publicPublishConfig} = options;
  const libraryProjects = getLibraryProjectNames(tree);

  if (libraryProjects.length === 0) {
    console.error(chalk.red(`🐋 nx-release: no library projects found in your workspace -> aborting`));
    process.exit(0);
  }

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
