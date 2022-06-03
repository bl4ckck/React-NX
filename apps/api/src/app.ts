import Fastify from 'fastify'
import type { FastifyInstance, FastifyServerOptions } from 'fastify'

export function build(opts?: FastifyServerOptions): FastifyInstance {
  const fastify = Fastify({
    logger: {
      prettyPrint: process.env.NODE_ENV === 'development'
        ? {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname'
        }
        : false
    },
    ...opts
  });

  // Hello world
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  });

  return fastify;
}
