import { Static, Type, TSchema } from '@sinclair/typebox';
import { FastifySchema } from 'fastify';

export type ResponseType<T extends Static<TSchema>> = {
  error: boolean;
  message: string;
  data: T[] | T;
};

export const ResponseObject = (schema: TSchema) =>
  Type.Object({
    error: Type.Boolean(),
    message: Type.String(),
    data: Type.Union([Type.Array(schema), schema]),
  });

export const responseSchemaGenerator = (
  schema: TSchema,
  opts?: FastifySchema
): { schema: FastifySchema } => {
  const response = ResponseObject(schema);

  return {
    schema: {
      response: {
        200: response,
        201: response,
        500: response,
      },
      ...opts,
    },
  };
};

export const result: <T extends Static<TSchema>>(data: T) => ResponseType<T> = <
  T
>(
  data: T
) => {
  return {
    data,
    error: false,
    message: '',
  };
};
