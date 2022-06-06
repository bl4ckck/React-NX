import type { FastifyInstance } from 'fastify/types/instance';
import { build } from './app';

type HelloWorldType = {
  hello: string;
};

describe('Book Store Sekolah Dasar API', () => {
  let app: FastifyInstance;
  const PREFIX = '/api/v1';

  beforeAll(() => {
    app = build();
  });

  it('should return hello world', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${PREFIX}/`,
    });

    expect(response.statusCode).toBe<number>(200);
    expect(response.json()).toHaveProperty<string>('hello');
    expect(response.body).toBe('{"hello":"world"}');
    expect(response.json()).toMatchObject<HelloWorldType>({ hello: 'world' });
  });
});
