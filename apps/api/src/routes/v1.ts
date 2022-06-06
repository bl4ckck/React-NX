import type { FastifyInstance, FastifyRegisterOptions } from "fastify";
import { bookRoute } from "@react-nx/api/book";
import { orderRoute } from "@react-nx/api/order";
// import { bookRoute } from "libs/api/book/src";
// import { orderRoute } from "libs/api/order/src";

export function v1(fastify: FastifyInstance,
  opts: FastifyRegisterOptions<unknown>,
   done: (err?: Error) => void): void {
    fastify.get('/', function (request, reply) {
        reply.send({ hello: 'world' });
    });
    fastify.register(bookRoute, { prefix: '/book' });
    fastify.register(orderRoute, { prefix: '/order' });

    done();
}

export default v1;
