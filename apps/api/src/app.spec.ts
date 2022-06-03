import type { FastifyInstance } from "fastify/types/instance";
import { build } from "./app";

type HelloWorldType = {
  hello: string
};

describe('Book Store Sekolah Dasar API', () => {
  let app: FastifyInstance;

  beforeAll(() => {
    app = build();
  });

  test('should return hello world', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).toBe<number>(200);
    expect(response.json()).toHaveProperty<string>('hello');
    expect(response.json()).toMatchObject<HelloWorldType>({ hello: 'world' });
  });
});
