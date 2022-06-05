import { Static, Type } from '@sinclair/typebox';

export const BookSchema = Type.Object({
  id: Type.Integer(),
  author: Type.String(),
  title: Type.String(),
  price: Type.Number(),
  rating: Type.Number(),
});

export type BookType = Static<typeof BookSchema>;
