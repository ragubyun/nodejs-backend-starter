import router from '../../../src/routes/index';

jest.mock('../../../src/routes/sample', () => 'sample-router');
jest.mock('express', () => ({
  Router() {
    return {
      use: jest.fn(),
    };
  },
}));

describe('routes/index', () => {
  it('should use all routes in this directory', () => {
    expect(router.use).toBeCalledWith('/sample', 'sample-router');
  });
});
