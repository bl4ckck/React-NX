import type { FastifyInstance, FastifyServerOptions } from 'fastify';
import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { corsConfig } from '@react-nx/api/core';
import { v1 } from './routes/v1';

export function build(opts?: FastifyServerOptions): FastifyInstance {
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

  fastify.register(fastifyCors, corsConfig());
  fastify.register(v1, { prefix: '/api/v1' });

  return fastify;
}
