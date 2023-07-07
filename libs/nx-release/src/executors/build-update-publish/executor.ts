import {execSync} from "child_process";

import updateVersion from '../update-version/executor';
import npmPublish from '../npm-publish/executor';

import { BuildUpdatePublishExecutorSchema } from './schema';

export default async function runExecutor(
  options: BuildUpdatePublishExecutorSchema
) {
  const {libName, libPath} = options;

  await updateVersion({
    libName, libPath
  });

  execSync(`nx build --project ${libName}`);

  await npmPublish({
    libName,
    libPath
  });

  return {
    success: true,
  };
}
