const request = require('supertest');
const app = require('../app');

describe('Unit Test', () => {
  it('GET / should work', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('CI/CD pipeline is working');
  });
});
