import { NpmPublishExecutorSchema } from './schema';
import { exec } from 'child_process';

export default async function runExecutor(options: NpmPublishExecutorSchema) {
  const { libraryName, libraryPath } = options;

  const directory = libraryPath
    ? `${libraryPath}${libraryName}`
    : `./dist/libs/${libraryName}`;

  exec(
    `cd ${directory} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > .npmrc && npm publish`
  );

  return {
    success: true,
  };
}
