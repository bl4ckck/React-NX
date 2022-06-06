import type { FastifyCorsOptions } from '@fastify/cors';

export function corsConfig(): FastifyCorsOptions {
  return {
    origin: (origin, cb) => {
      // Allow requests with no origin
      cb(null, true);
      return;
    },
  };
}
