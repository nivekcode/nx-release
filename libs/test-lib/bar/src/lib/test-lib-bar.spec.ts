import { testLibBar } from './test-lib-bar';

describe('testLibBar', () => {
  it('should work', () => {
    expect(testLibBar()).toEqual('test-lib-bar');
  });
});
