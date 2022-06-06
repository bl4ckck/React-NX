import fetch from 'cross-fetch';
import { ResponseType } from '../schema';
import { BookType } from './book.schema';

export async function getBooks(): Promise<ResponseType<BookType[]>> {
  const data = await fetch('http://127.0.0.1:3000/api/v1/book', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
}
