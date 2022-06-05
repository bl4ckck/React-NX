import { store } from '@react-nx/bookstore/shared/redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import BookstoreBook from './bookstore-book';

describe('BookstoreBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <BookstoreBook />
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
