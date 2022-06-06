import {
  BookSchema,
  orderFixture,
  OrderSchema,
  responseSchemaGenerator,
  result,
} from '@react-nx/bookstore/shared/data-access';
import { Type } from '@sinclair/typebox';
import type { FastifyInstance, FastifyRegisterOptions } from 'fastify';

export function orderRoute(
  fastify: FastifyInstance,
  opts: FastifyRegisterOptions<unknown>,
  done: (err?: Error) => void
) {
  // create order ID
  fastify.post(
    '/',
    responseSchemaGenerator(OrderSchema, {
      body: Type.Array(BookSchema),
    }),
    function (request, reply) {
      reply.status(200).send(result(orderFixture));
    }
  );

  done();
}
