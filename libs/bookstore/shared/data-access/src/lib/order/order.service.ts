import fetch from 'cross-fetch';
import { BookType } from "../book";
import { ResponseType } from "../schema";
import { OrderType } from "./order.schema";

export async function createCheckout(payload: BookType[]): Promise<ResponseType<OrderType>> {
  const data = await fetch('http://127.0.0.1:3000/api/v1/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return data.json();
}
