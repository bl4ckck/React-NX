import { Button } from '@react-nx/bookstore/shared/ui';
import styles from './bookstore-home.module.scss';

export function BookstoreHome() {
  return (
    <>
      <Button />
      <div className={styles['container']}>
        <h1>Welcome to BookstoreHome!</h1>
      </div>
    </>
  );
}

export default BookstoreHome;
