import { bookFixtureList } from '@react-nx/bookstore/shared/data-access';
import { Card } from '@react-nx/bookstore/shared/ui';
import styles from './bookstore-book.module.scss';

export function Book() {
  return (
    <div className={styles['container']}>
      <h1 data-testid="book-title-test">Books</h1>
      <div className={styles['wrapper']}>
        {bookFixtureList.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Book;
