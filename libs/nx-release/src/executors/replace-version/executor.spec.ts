import * as replaceJsonProp from 'replace-json-property';

import { ReplaceVersionExecutorSchema } from './schema';
import executor from './executor';

describe('ReplaceVersion Executor', () => {

  it('should replace the version with in the default path if no path was provided', async () => {
    const version = '2.0.0';
    const libraryName = 'foo';
    const options: ReplaceVersionExecutorSchema = {
      version,
      libraryName
    };
    const expectedPath = `libs/${libraryName}/package.json`;

    jest.spyOn(replaceJsonProp, 'replace').mockImplementation(() => {});

    const output = await executor(options);

    expect(replaceJsonProp.replace).toHaveBeenCalledWith(expectedPath, 'version', version);
    expect(output.success).toBe(true);
  });

  it('should replace the version with the provided path', async () => {
    const version = '2.0.0';
    const libraryName = 'foo';
    const libraryPath = './libs/my-domain/test/';
    const options: ReplaceVersionExecutorSchema = {
      version,
      libraryName,
      libraryPath
    };
    const expectedPath = `libs/${libraryName}/package.json`;

    jest.spyOn(replaceJsonProp, 'replace').mockImplementation(() => {});

    const output = await executor(options);

    expect(replaceJsonProp.replace).toHaveBeenCalledWith(expectedPath, 'version', version);
    expect(output.success).toBe(true);
  });


});
