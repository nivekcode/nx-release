import { testLibBaz } from './test-lib-baz';

describe('testLibBaz', () => {
  it('should work', () => {
    expect(testLibBaz()).toEqual('test-lib-baz');
  });
});
