const request = require('supertest');
const app = require('../index');

let server;

beforeAll(() => {
  server = app.listen(0); // random free port
});

afterAll((done) => {
  server.close(done);
});

test('integration test - GET /', async () => {
  const res = await request(server).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('CI/CD pipeline is working!');
});
