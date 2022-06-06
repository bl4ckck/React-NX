import { FastifyInstance, FastifyPluginCallback, FastifyRegisterOptions, FastifyServerOptions } from "fastify";
import Fastify from 'fastify';

function build(
  opts?: FastifyServerOptions
): FastifyInstance {
  const fastify = Fastify({
    logger: {
      prettyPrint:
        process.env.NODE_ENV === 'development'
          ? {
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname',
          }
          : false,
    },
    ...opts,
  });

  return fastify;
}

export function apiTest(
  route: FastifyPluginCallback,
  path: string,
  opts?: FastifyServerOptions
): FastifyInstance {
  const PREFIX = '/api/v1' + path;
  const fastify = build(opts);

  fastify.register(route, { prefix: PREFIX });

  return fastify;
}
