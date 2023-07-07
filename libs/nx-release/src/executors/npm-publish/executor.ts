import { NpmPublishExecutorSchema } from './schema';
import { execSync } from 'child_process';

export default async function runExecutor(options: NpmPublishExecutorSchema) {
  const { libName, libPath } = options;

  const directory = libPath
    ? `${libPath}/${libName}`
    : `./dist/libs/${libName}`;

  execSync(
    `cd ${directory} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > .npmrc && npm publish`
  );

  return {
    success: true,
  };
}
