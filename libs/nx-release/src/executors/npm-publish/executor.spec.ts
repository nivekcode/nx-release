import * as child_process from "child_process";

import * as projectHelpers from "../helpers/projects.helpers";

import executor from './executor';

describe('NpmPublish Executor', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = { ...OLD_ENV };
  });

  it('should execSync with a default libPath if no libPath was provided', async () => {
    const mockRoot = 'libs/my-domain/foo';
    const context = {
    } as any;

    /* eslint-disable */
    jest.spyOn(child_process, 'execSync').mockImplementation((() => {}) as any);
    /* eslint-disable */
    jest.spyOn(projectHelpers, 'getRoot').mockReturnValue(mockRoot);

    const expectedCommand = `cd ./dist/${mockRoot} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' >> .npmrc && npm publish --tag=latest`
    const output = await executor({}, context);

    expect(child_process.execSync).toHaveBeenCalledWith(expectedCommand);
    expect(output.success).toBe(true);
  });

  it('should execSync with a specific npm registry if provided with one', async () => {
    const mockRoot = 'libs/my-domain/foo';
    const context = {
    } as any;
    const registry = 'specific-npm-registry.org';
    process.env = Object.assign(process.env, { NPM_REGISTRY: registry });

    /* eslint-disable */
    jest.spyOn(child_process, 'execSync').mockImplementation((() => {}) as any);
    /* eslint-disable */
    jest.spyOn(projectHelpers, 'getRoot').mockReturnValue(mockRoot);

    const expectedCommand = `cd ./dist/${mockRoot} && echo '//${registry}/:_authToken=${process.env.NPM_TOKEN}' >> .npmrc && npm publish --tag=latest`
    const output = await executor({}, context);

    expect(child_process.execSync).toHaveBeenCalledWith(expectedCommand);
    expect(output.success).toBe(true);
  });

  it('should execSync with a specific npm channel if provided with one', async () => {
    const mockRoot = 'libs/my-domain/foo';
    const context = {
    } as any;
    const channel = 'beta';
    process.env = Object.assign(process.env, { CHANNEL: channel });

    /* eslint-disable */
    jest.spyOn(child_process, 'execSync').mockImplementation((() => {}) as any);
    /* eslint-disable */
    jest.spyOn(projectHelpers, 'getRoot').mockReturnValue(mockRoot);

    const expectedCommand = `cd ./dist/${mockRoot} && echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' >> .npmrc && npm publish --tag=${channel}`
    const output = await executor({}, context);

    expect(child_process.execSync).toHaveBeenCalledWith(expectedCommand);
    expect(output.success).toBe(true);
  });
});
