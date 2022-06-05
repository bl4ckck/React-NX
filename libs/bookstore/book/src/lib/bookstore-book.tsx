import styles from './bookstore-book.module.scss';

/* eslint-disable-next-line */
export interface BookProps {}

export function Book(props: BookProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Book!</h1>
    </div>
  );
}

export default Book;
