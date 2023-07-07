import { ReplaceVersionExecutorSchema } from './schema';
import {replace} from 'replace-json-property';
import * as process from "process";

export default async function runExecutor(
  options: ReplaceVersionExecutorSchema
) {
  const {libName, libPath} = options;

  const packageJsonPath = libPath ?
    `${libPath}/${libName}/package.json` :
    `libs/${libName}/package.json`

  replace(packageJsonPath, 'version', process.env.VERSION);

  return {
    success: true,
  };
}
