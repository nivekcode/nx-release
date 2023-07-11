import {formatFiles, Tree, updateJson} from '@nx/devkit';
import * as inquirer from 'inquirer';
import * as process from "process";
import * as chalk from "chalk";

import {getLibraryProjectNames, getLibraryRoot} from "../helpers/projects.helpers";
import {getSpinner} from "../helpers/spinner.helper";

import {ConfigureLibraryGeneratorSchema} from './schema';

export async function configureLibraryGenerator(
  tree: Tree,
  options: ConfigureLibraryGeneratorSchema
) {
  let {libName} = options;
  const { publicPublishConfig } = options;
  const spinner = getSpinner();

  try {
    if (!libName) {
      const libraryProjects = getLibraryProjectNames(tree);

      if (libraryProjects.length === 0) {
        console.error(chalk.red(`🐋 nx-release: no library projects found in your workspace -> aborting`));
        process.exit(0);
      }

      const projectPrompt = await inquirer.prompt({
        type: 'list',
        name: 'selectedProject',
        choices: libraryProjects
      });
      libName = projectPrompt.selectedProject;
    }

    spinner.text = `🐋 nx-release: configuring executor for library ${libName}`;
    spinner.start();

    const libraryRoot = getLibraryRoot(tree, libName);

    updateJson(tree, `${libraryRoot}/project.json`, (packageJson: any) => {
      packageJson.targets.release = {
        executor: 'nx-release:build-update-publish',
        options: {
          libName
        }
      };
      return packageJson;
    });

    spinner.succeed();

    if (publicPublishConfig) {
      spinner.text = `🐋 nx-release: add public publish config for library ${libName}`;
      spinner.start();

      updateJson(tree, `${libraryRoot}/package.json`, (packageJson: any) => {
        packageJson.publishConfig = {
          access: 'public'
        };
        return packageJson;
      });
      spinner.succeed();
    }
    await formatFiles(tree);
  } catch (e) {
    spinner.fail(`🐋 nx-release: something went wrong: ${e.toString()}`)
  }
}

export default configureLibraryGenerator;
