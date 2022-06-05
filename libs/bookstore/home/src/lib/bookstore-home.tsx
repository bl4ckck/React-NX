import { Button } from '@react-nx/bookstore/shared/ui';
import styles from './bookstore-home.module.scss';

export function Home() {
  return (
    <>
      <Button />
      <div className={styles['container']}>
        <h1>Welcome to Home!</h1>
      </div>
    </>
  );
}

export default Home;
