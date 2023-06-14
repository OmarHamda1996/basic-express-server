const supertest = require('supertest');
const server = require('../src/server');

const request = supertest(server.app);

describe('Server Tests', () => {
  it('should respond with 404 on a bad route', async () => {
    const response = await request.get('/bad-route');
    expect(response.status).toBe(404);
  });

  it('should respond with 404 on a bad method', async () => {
    const response = await request.post('/person');
    expect(response.status).toBe(404);
  });

  it('should respond with 500 if no name in the query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toBe(500);
    expect(response.text).toBe('No name provided');
  });

  it('should respond with 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=john');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'john' });
  });

  it('should respond with correct output object when name is in the query string', async () => {
    const response = await request.get('/person?name=emma');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'emma' });
  });
});
