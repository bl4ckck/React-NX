import { render } from '@testing-library/react';

import BookstoreCart from './bookstore-cart';

describe('BookstoreCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookstoreCart />);
    expect(baseElement).toBeTruthy();
  });
});
