import router from '../../../src/routes/index';

jest.mock('../../../src/routes/router-users', () => 'router-users');
jest.mock('express', () => ({
  Router() {
    return {
      use: jest.fn(),
    };
  },
}));

describe('routes/index', () => {
  it('should use all routes in this directory', () => {
    expect(router.use).toBeCalledWith('/users', 'router-users');
  });
});
