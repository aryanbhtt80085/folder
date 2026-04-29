const request = require('supertest');
const axios = require('axios');
const app = require('./app');

describe('CI/CD Tests', () => {

  // UNIT TEST
  it('Unit Test: GET / should return response', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello CI/CD Pipeline Working');
  });

  // INTEGRATION TEST (Server3)
  it('Integration Test: Server3 response check', async () => {
    const res = await axios.get('http://3.89.162.126:3000/');
    expect(res.status).toBe(200);
  });

});
