import { ReplaceVersionExecutorSchema } from './schema';
import {replace} from 'replace-json-property';

export default async function runExecutor(
  options: ReplaceVersionExecutorSchema
) {
  const {libName, libPath, version} = options;

  const packageJsonPath = libPath ?
    `${libPath}/${libName}/package.json` :
    `libs/${libName}/package.json`

  replace(packageJsonPath, 'version', version);

  return {
    success: true,
  };
}
