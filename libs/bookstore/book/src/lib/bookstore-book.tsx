import { bookFixtureList, BookType, getBooks } from '@react-nx/bookstore/shared/data-access';
import { Card } from '@react-nx/bookstore/shared/ui';
import { useEffect, useState } from 'react';
import styles from './bookstore-book.module.scss';

export function Book() {
  const [bookList, setBookList] = useState<BookType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getBooks();
      setBookList(data as BookType[]);
    };
    fetchData();
  }, []);

  return (
    <div className={styles['container']}>
      <h1 data-testid="book-title-test">Books</h1>
      <div className={styles['wrapper']}>
        {bookList && bookList.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Book;
