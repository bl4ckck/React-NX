import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['container__logo']}>
        <Link to={'/'} className={styles['container__logo-title']}>
          Bookstore
        </Link>
      </div>
      <nav className={styles['container__nav']}>
        <ul>
          <li>
            <Link data-testid="book-link" to={'/books'}>
              Book
            </Link>
          </li>
          <li>
            <Link to={'/cart'}>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
