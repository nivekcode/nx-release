import { ReplaceVersionExecutorSchema } from './schema';
import {replace} from 'replace-json-property';

export default async function runExecutor(
  options: ReplaceVersionExecutorSchema
) {
  const {libraryName, libraryPath, version} = options;

  const packageJsonPath = libraryPath ?
    `${libraryPath}/${libraryName}/package.json` :
    `libs/${libraryName}/package.json`

  replace(packageJsonPath, 'version', version);

  return {
    success: true,
  };
}
