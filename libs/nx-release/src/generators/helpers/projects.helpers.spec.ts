import * as nxDevKit from '@nx/devkit';

import { getLibraryProjectNames, getLibraryRoot } from './projects.helpers';

describe('generator project helper', () => {
  it('should return the library project names', () => {
    const expectedLibraryNames = ['foo', 'bar'];

    const mockProjectConfigs = new Map<string, any>();
    mockProjectConfigs.set('foo', {
      projectType: 'library',
    });
    mockProjectConfigs.set('bar', {
      projectType: 'library',
    });
    mockProjectConfigs.set('baz', {
      projectType: 'application',
    });

    jest.spyOn(nxDevKit, 'getProjects').mockReturnValue(mockProjectConfigs);

    expect(getLibraryProjectNames({} as any)).toEqual(expectedLibraryNames);
  });

  it('should get the library root', () => {
    const mockProjectConfigs = new Map<string, any>();
    mockProjectConfigs.set('foo', {
      projectType: 'library',
      root: 'libs/foo',
    });
    mockProjectConfigs.set('bar', {
      projectType: 'library',
      root: 'libs/bar',
    });

    jest.spyOn(nxDevKit, 'getProjects').mockReturnValue(mockProjectConfigs);

    expect(getLibraryRoot({} as any, 'foo')).toEqual('libs/foo');
  });
});
