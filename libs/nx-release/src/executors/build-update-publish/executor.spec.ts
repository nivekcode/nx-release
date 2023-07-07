import { BuildUpdatePublishExecutorSchema } from './schema';
import executor from './executor';

import * as updateVersion from '../update-version/executor';
import * as npmPublish from '../npm-publish/executor';
import * as childProcess from 'child_process';

describe('BuildUpdatePublish Executor', () => {
  it('should call update-version executor with the libName and the libPath', async () => {
    const libName = 'foo';
    const libPath = 'libs/my-domain';

    const options: BuildUpdatePublishExecutorSchema = {
      libName,
      libPath
    };

    /* eslint-disable */
    jest.spyOn(updateVersion, 'default').mockImplementation((() => {}) as any)
    /* eslint-disable */
    jest.spyOn(npmPublish, 'default').mockImplementation((() => {}) as any)
    /* eslint-disable */
    jest.spyOn(childProcess, 'execSync').mockImplementation((() => {}) as any)


    const output = await executor(options);

    expect(updateVersion.default).toHaveBeenCalledWith({libName, libPath});
    expect(npmPublish.default).toHaveBeenCalledWith({libName, libPath});
    expect(childProcess.execSync).toHaveBeenCalledWith(`nx build --project ${libName}`);
    expect(output.success).toBe(true);
  });
});
