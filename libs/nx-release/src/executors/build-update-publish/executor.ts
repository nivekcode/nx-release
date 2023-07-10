import {ExecutorContext} from "@nx/devkit";
import {execSync} from "child_process";

import updateVersion from '../update-version/executor';
import {getProjectName} from '../helpers/project';
import npmPublish from '../npm-publish/executor';

import {BuildUpdatePublishExecutorSchema} from './schema';

export default async function runExecutor(
  options: BuildUpdatePublishExecutorSchema,
  context: ExecutorContext
) {

  await updateVersion({}, context);
  execSync(`nx build --project ${getProjectName(context)}`);
  await npmPublish({}, context);

  return {
    success: true,
  };
}
