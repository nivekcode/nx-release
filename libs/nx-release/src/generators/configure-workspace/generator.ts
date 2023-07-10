import * as ora from "ora";
import * as path from 'path';
import {execSync} from "child_process";
import {formatFiles, generateFiles, Tree,} from '@nx/devkit';

import {ConfigureWorkspaceGeneratorSchema} from './schema';

export async function configureWorkspaceGenerator(
  tree: Tree,
  options: ConfigureWorkspaceGeneratorSchema
) {
  const {installDeps, generateReleaseConfig, generateWorkflows} = options;

  const spinner = ora();
  try {

    if (installDeps) {
      spinner.text = '🐋 nx-release: Installing dependencies';
      spinner.start();
      execSync(`npm i -D @semantic-release/changelog @semantic-release/commit-analyzer @semantic-release/exec @semantic-release/git @semantic-release/release-notes-generator nx-release replace-json-property`);
      spinner.succeed();
    }

    if (generateReleaseConfig || generateWorkflows) {
      const artifacts = getArtifacts(generateReleaseConfig, generateWorkflows);
      spinner.text = `🐋 nx-release: generating ${artifacts}`;
      spinner.start();
      generateFiles(tree, path.join(__dirname, 'files'), '.', options);
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
