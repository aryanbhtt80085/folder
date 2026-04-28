const request = require('supertest');
const app = require('../index');

describe('Unit Test - GET /', () => {
  it('should return correct response', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Aryan, CI/CD pipeline is working!');
  });
});
