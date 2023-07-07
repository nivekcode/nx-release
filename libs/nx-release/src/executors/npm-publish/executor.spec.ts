import * as child_process from "child_process";

import { NpmPublishExecutorSchema } from './schema';
import executor from './executor';


describe('NpmPublish Executor', () => {

  it('should exec with a default libPath if no libPath was provided', async () => {
    const libName = 'foo';
    const options: NpmPublishExecutorSchema = {
      libName
    };

    jest.spyOn(child_process, 'exec');
    const expectedCommand = `cd ./dist/libs/${libName} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > .npmrc && npm publish`

    const output = await executor(options);

    expect(child_process.exec).toHaveBeenCalledWith(expectedCommand)
    expect(output.success).toBe(true);
  });

  it('should exec with the provided libPath', async () => {
    const libName = 'foo';
    const libPath = './dist/libs/my-domain';
    const options: NpmPublishExecutorSchema = {
      libName,
      libPath
    };

    jest.spyOn(child_process, 'exec');
    const expectedCommand = `cd ${libPath}/${libName} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > .npmrc && npm publish`

    const output = await executor(options);

    expect(child_process.exec).toHaveBeenCalledWith(expectedCommand)
    expect(output.success).toBe(true);
  });

});
