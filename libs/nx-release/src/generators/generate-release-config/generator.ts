import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GenerateReleaseConfigGeneratorSchema } from './schema';
import { getSpinner } from '../helpers/spinner.helper';

export async function generateReleaseConfigGenerator(
  tree: Tree,
  options: GenerateReleaseConfigGeneratorSchema
) {
  const spinner = getSpinner();
  try {
    spinner.text = `🐋 nx-release: generating a release config`;
    spinner.start();
    generateFiles(tree, path.join(__dirname, 'files'), '.', options);
    spinner.succeed();

    await formatFiles(tree);
  } catch (e) {
    spinner.fail(`🐋 nx-release: something went wrong: ${e.toString()}`);
  }
}

export default generateReleaseConfigGenerator;
