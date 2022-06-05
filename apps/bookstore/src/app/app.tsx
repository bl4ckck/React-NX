import { Routes, Route } from 'react-router-dom';

import { Home } from '@react-nx/bookstore/home';
import { Layout } from '@react-nx/bookstore/shared/layout';
import { Book } from '@react-nx/bookstore/book';
import { Cart } from '@react-nx/bookstore/cart';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
