const request = require('supertest');
const app = require('../app'); // IMPORTANT: import your real app

describe('Health Check API', () => {
  it('GET /health returns 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });
});
