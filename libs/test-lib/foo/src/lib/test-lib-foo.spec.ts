import { testLibFoo } from './test-lib-foo';

describe('testLibFoo', () => {
  it('should work', () => {
    expect(testLibFoo()).toEqual('test-lib-foo');
  });
});
