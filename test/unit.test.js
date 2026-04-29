const request = require('supertest');
const app = require('../index').app;

describe('Unit Test', () => {
  test('GET / should work', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('CI/CD pipeline is working');
  });
});
