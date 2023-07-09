import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import ora from 'ora';
import chalk from 'chalk';
import * as path from 'path';
import {execSync} from "child_process";

import { ConfigureWorkspaceGeneratorSchema } from './schema';

export async function configureWorkspaceGenerator(
  tree: Tree,
  options: ConfigureWorkspaceGeneratorSchema
) {

  const spinner = ora();
  try {
    console.log(chalk.blue('🐋 nx-release: we are going to configure your workspace for release'));
    console.log(chalk.blue('🐋 nx-release: first we will install the required deps'));

    spinner.text = '🐋 nx-release: Installing dependencies';
    spinner.start();
    execSync(`npm i -D @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/exec @semantic-release/git @semantic-release/release-notes-generator nx-release replace-json-property`);
    spinner.succeed();

    spinner.text = `🐋 nx-release: generating release config`;
    spinner.start();
    generateFiles(tree, path.join(__dirname, 'files'), '.', options);
    spinner.succeed();

    await formatFiles(tree);
  }
  catch (e) {
    spinner.fail(`🐋 nx-release: something went wrong: ${e.toString()}`)
  }
}

export default configureWorkspaceGenerator;
