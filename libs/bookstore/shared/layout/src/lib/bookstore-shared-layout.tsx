import styles from './bookstore-shared-layout.module.scss';
import Navbar from './navbar/navbar';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles['container']}>{children}</main>
    </>
  );
}

export default Layout;
