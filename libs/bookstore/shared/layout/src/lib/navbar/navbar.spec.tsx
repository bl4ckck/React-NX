import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Route, Router, Routes } from 'react-router-dom';

import Layout from '../bookstore-shared-layout';
import { Home } from '@react-nx/bookstore/home';
import { Book } from '@react-nx/bookstore/book';
import { Cart } from '@react-nx/bookstore/cart';
import { renderWrapper } from '@react-nx/bookstore/shared/utils-testing';
import Navbar from './navbar';

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWrapper(<Navbar />);
    expect(baseElement).toBeTruthy();
  });

  it('should navigate with correctly path', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const renderRoute = () => {
      return (
        <Router location={history.location} navigator={history}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Book />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </Router>
      );
    };
    render(renderRoute());

    // verify page content for /home
    const user = userEvent.setup();
    expect(screen.getByText(/Welcome to Home!/i)).toBeInTheDocument();

    // switch page to /books
    await user.click(screen.getByTestId('book-link'));
    render(renderRoute());
    expect(screen.getByTestId('book-title-test')).toBeInTheDocument();
  });
});
