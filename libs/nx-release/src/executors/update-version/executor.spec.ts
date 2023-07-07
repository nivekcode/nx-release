import * as replaceJsonProp from 'replace-json-property';

import { ReplaceVersionExecutorSchema } from './schema';
import executor from './executor';
import * as process from "process";

describe('ReplaceVersion Executor', () => {

  it('should replace the version with in the default path if no path was provided', async () => {
    const version = '2.0.0';
    const libName = 'foo';
    process.env.VERSION = version;
    const options: ReplaceVersionExecutorSchema = {
      libName
    };
    const expectedPath = `libs/${libName}/package.json`;

    /* eslint-disable */
    jest.spyOn(replaceJsonProp, 'replace').mockImplementation(() => {});

    const output = await executor(options);

    expect(replaceJsonProp.replace).toHaveBeenCalledWith(expectedPath, 'version', version);
    expect(output.success).toBe(true);
  });

  it('should replace the version with the provided path', async () => {
    const version = '2.0.0';
    const libName = 'foo';
    const libPath = './libs/my-domain/test';
    process.env.VERSION = version;

    const options: ReplaceVersionExecutorSchema = {
      libName,
      libPath
    };
    const expectedPath = `libs/${libName}/package.json`;

    jest.spyOn(replaceJsonProp, 'replace').mockImplementation(() => {});

    const output = await executor(options);

    expect(replaceJsonProp.replace).toHaveBeenCalledWith(expectedPath, 'version', version);
    expect(output.success).toBe(true);
  });


});
