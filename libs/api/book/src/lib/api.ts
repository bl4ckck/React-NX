import {
  bookFixtureList,
  BookSchema,
  responseSchemaGenerator,
  result,
} from '@react-nx/bookstore/shared/data-access';
import type { FastifyInstance, FastifyRegisterOptions } from 'fastify';

export function bookRoute(
  fastify: FastifyInstance,
  opts: FastifyRegisterOptions<unknown>,
  done: (err?: Error) => void
) {
  // find all books
  fastify.get(
    '/',
    responseSchemaGenerator(BookSchema),
    function (request, reply) {
      reply.status(200).send(result(bookFixtureList));
    }
  );

  done();
}
