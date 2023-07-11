import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing';
import * as nxDevkit from '@nx/devkit';
import {Tree} from '@nx/devkit';

import * as spinnerHelper from "../helpers/spinner.helper";

import {generateReleaseConfigGenerator} from './generator';
import {GenerateReleaseConfigGeneratorSchema} from './schema';

describe('generate-release-config generator', () => {
  let tree: Tree;
  const options: GenerateReleaseConfigGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
    jest.spyOn(spinnerHelper, 'getSpinner').mockReturnValue(({
        start: jest.fn(),
        succeed: jest.fn(),
        fail: jest.fn(),
      }) as any
    );
  });

  it('should generate the release config', async () => {
    jest.spyOn(nxDevkit, 'generateFiles').mockImplementation(() => {});

    await generateReleaseConfigGenerator(tree, options);
    expect(nxDevkit.generateFiles).toHaveBeenCalled();
  });
});
