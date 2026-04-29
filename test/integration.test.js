const axios = require('axios');

describe('Integration Test', () => {
  let server;

  beforeAll(() => {
    server = require('../index');
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should respond from running server', async () => {
    const res = await axios.get('http://localhost:3000/');
    expect(res.status).toBe(200);
    expect(res.data).toContain('CI/CD pipeline is working');
  }, 15000);
});
