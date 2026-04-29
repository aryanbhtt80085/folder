const request = require('supertest');
const app = require('../index');

describe('Unit Test - GET /', () => {
  it('should return correct response', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello CI/CD Pipeline Working');
    expect(res.statusCode).toBe(200);
  });
});
