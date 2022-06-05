import { store } from '@react-nx/bookstore/shared/redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import BookstoreCart from './bookstore-cart';

describe('BookstoreCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BookstoreCart />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
