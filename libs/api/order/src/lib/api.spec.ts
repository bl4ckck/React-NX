import { apiTest } from '@react-nx/api/core';
import { bookFixtureList, orderFixture } from '@react-nx/bookstore/shared/data-access';
import { FastifyInstance } from 'fastify';
import { orderRoute } from './api'

describe('orderRoute', () => {
  let app: FastifyInstance;
  const PREFIX = '/api/v1';

  beforeAll(() => {
    app = apiTest(orderRoute, '/order');
  });

  it('should return bookFixtureList', async () => {
    const response = await app.inject({
      method: 'POST',
      url: `${PREFIX}/order`,
      payload: bookFixtureList,
    });

    expect(response.statusCode).toBe<number>(200);
    expect(response.json()).toHaveProperty<string[]>('data');
    expect(response.json().data).toEqual(orderFixture);
    expect(response.json().data).toBeInstanceOf(Object);
  });
});
