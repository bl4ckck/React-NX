import { apiTest } from '@react-nx/api/core';
import { bookFixtureList } from '@react-nx/bookstore/shared/data-access';
import { FastifyInstance } from 'fastify';
import { bookRoute } from './api';

describe('bookRoute', () => {
  let app: FastifyInstance;
  const PREFIX = '/api/v1';

  beforeAll(() => {
    app = apiTest(bookRoute, '/book');
  });

  it('should return bookFixtureList', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${PREFIX}/book`,
    });

    expect(response.statusCode).toBe<number>(200);
    expect(response.json()).toHaveProperty<string[]>('data');
    expect(response.json().data).toEqual(bookFixtureList);
    expect(response.json().data).toBeInstanceOf(Array);
  });
});
