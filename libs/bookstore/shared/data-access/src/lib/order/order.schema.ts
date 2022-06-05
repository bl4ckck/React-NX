import { Static, Type } from '@sinclair/typebox';

export const OrderSchema = Type.Object({
  orderId: Type.String(),
});

export type OrderType = Static<typeof OrderSchema>;
