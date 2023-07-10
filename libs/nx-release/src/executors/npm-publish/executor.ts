import {NpmPublishExecutorSchema} from './schema';
import {execSync} from 'child_process';
import {getRoot} from "../helpers/project";
import {ExecutorContext} from "@nx/devkit";

export default async function runExecutor(options: NpmPublishExecutorSchema,
                                          context: ExecutorContext
) {
  const sourceRoot = `./dist/${getRoot(context)}`;
  execSync(
    `cd ${sourceRoot} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > .npmrc && npm publish`
  );
  return {
    success: true,
  };
}
