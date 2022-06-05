import { render } from '@testing-library/react';

import BookstoreBook from './bookstore-book';

describe('BookstoreBook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookstoreBook />);
    expect(baseElement).toBeTruthy();
  });
});
