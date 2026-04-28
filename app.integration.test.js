const axios = require('axios');

describe('Integration Test - Live Server', () => {
  it('should respond from server3', async () => {
    const res = await axios.get('http://54.221.6.74:3000/');
    expect(res.status).toBe(200);
    expect(res.data).toContain('CI/CD pipeline is working');
  });
});
