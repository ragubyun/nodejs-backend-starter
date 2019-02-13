import express from 'express';
import request from 'supertest';

import routes from '../../../src/routes/index';

const app = express();
app.use(express.json());
app.use(routes);

describe('GET /api/v1/users', () => {
  it('should return the status code 200 with all users', (done) => {
    request(app)
      .get('/users')
      .expect(200, 'list of all users')
      .end(done);
  });
});

describe('GET /users/:id', () => {
  it('should return the status code 200 with user information', (done) => {
    request(app)
      .get('/users/test-id')
      .expect(200, 'user information of test-id')
      .end(done);
  });
});

describe('POST /users', () => {
  it('should return the status code 201 with success response', (done) => {
    request(app)
      .post('/users')
      .send({
        id: 'test-id',
        name: 'test-name',
        phone: 'test-phone',
      })
      .expect(201, {
        result: 'success',
        code: '201',
        message: 'Created',
      })
      .end(done);
  });

  it('should return the status code 422 with fail response', (done) => {
    request(app)
      .post('/users')
      .send({
        id: 'test-id',
        name: '',
        phone: 'test-phone',
      })
      .expect(422, {
        result: 'fail',
        code: '422',
        message: 'Unprocessable Entity',
      })
      .end(done);
  });
});
