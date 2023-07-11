import {execSync} from "child_process";
import {formatFiles, Tree,} from '@nx/devkit';

import {getSpinner} from "../helpers/spinner.helper";
import generateReleaseConfigGenerator from "../generate-release-config/generator";
import generateGhActionsGenerator from "../generate-gh-actions/generator";

import {ConfigureWorkspaceGeneratorSchema} from './schema';

export async function configureWorkspaceGenerator(
    tree: Tree,
    options: ConfigureWorkspaceGeneratorSchema
  ) {
    const {installDeps, generateReleaseConfig, generateGhActions} = options;
    const spinner = getSpinner();
  try {
    if (generateReleaseConfig) {
      await generateReleaseConfigGenerator(tree, {});
    }

    if (generateGhActions) {
      await generateGhActionsGenerator(tree, {});
    }

    if (installDeps) {
      spinner.text = '🐋 nx-release: Installing dependencies';
      spinner.start();
      execSync(`npm i -D @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/exec @semantic-release/git @semantic-release/release-notes-generator nx-release replace-json-property --force`);
      spinner.succeed();
    }

    await formatFiles(tree);
  } catch (e) {
    spinner.fail(`🐋 nx-release: something went wrong: ${e.toString()}`)
  }
}

function getArtifacts(generateReleaseConfig: boolean, generateWorkflows: boolean) {
  let artifacts = '';
  if (generateReleaseConfig) {
    artifacts += 'release config';
  }
  if(generateWorkflows){
    artifacts += artifacts.length > 0 ? '& GitHub actions': 'GitHub actions'
  }
  return artifacts;
}

export default configureWorkspaceGenerator;
