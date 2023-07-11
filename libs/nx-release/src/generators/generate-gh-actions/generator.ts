import {formatFiles, generateFiles, Tree,} from '@nx/devkit';
import * as path from 'path';

import {getSpinner} from '../helpers/spinner.helper';

import {GenerateGhActionsGeneratorSchema} from './schema';

export async function generateGhActionsGenerator(
  tree: Tree,
  options: GenerateGhActionsGeneratorSchema
) {
  const spinner = getSpinner();
  try {
    spinner.text = `🐋 nx-release: generating GitHub actions workflow files`;
    spinner.start();
    generateFiles(tree, path.join(__dirname, 'files'), '.', options);
    spinner.succeed();

    await formatFiles(tree);
  } catch (e) {
    spinner.fail(`🐋 nx-release: something went wrong: ${e.toString()}`);
  }
}

export default generateGhActionsGenerator;
