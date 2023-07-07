import * as child_process from "child_process";

import { NpmPublishExecutorSchema } from './schema';
import executor from './executor';


describe('NpmPublish Executor', () => {

  it('should exec with a default libPath if no libPath was provided', async () => {
    const libraryName = 'foo';
    const options: NpmPublishExecutorSchema = {
      libraryName
    };

    jest.spyOn(child_process, 'exec');
    const expectedCommand = `cd ./dist/libs/${libraryName} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > .npmrc && npm publish`

    const output = await executor(options);

    expect(child_process.exec).toHaveBeenCalledWith(expectedCommand)
    expect(output.success).toBe(true);
  });

  it('should exec with the provided libPath', async () => {
    const libraryName = 'foo';
    const libraryPath = './dist/libs/my-domain/';
    const options: NpmPublishExecutorSchema = {
      libraryName,
      libraryPath
    };

    jest.spyOn(child_process, 'exec');
    const expectedCommand = `cd ${libraryPath}${libraryName} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > .npmrc && npm publish`

    const output = await executor(options);

    expect(child_process.exec).toHaveBeenCalledWith(expectedCommand)
    expect(output.success).toBe(true);
  });

});
