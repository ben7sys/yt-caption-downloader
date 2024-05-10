const request = require('supertest');
const express = require('express');

let server;
let app;

beforeEach(() => {
  app = express();
  app.get('/', (req, res) => { res.send('Hello World!'); });
  server = app.listen(5533);
});

afterEach((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('responds with Hello World!', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello World!', done);
  });
});