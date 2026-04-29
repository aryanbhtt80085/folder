const axios = require('axios');
const { server } = require('../index');

afterAll((done) => {
  server.close(done);
});

describe('Integration Test - Live Server', () => {
  test('should respond from server3', async () => {
    const res = await axios.get('http://3.89.162.126:3000/', { timeout: 10000 });
    expect(res.status).toBe(200);
    expect(res.data).toContain('CI/CD pipeline is working');
  }, 15000);
});
