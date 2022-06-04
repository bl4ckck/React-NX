import { Routes, Route } from 'react-router-dom';

import { BookstoreHome } from '@react-nx/bookstore/home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<BookstoreHome />} />
    </Routes>
  );
}

export default App;
