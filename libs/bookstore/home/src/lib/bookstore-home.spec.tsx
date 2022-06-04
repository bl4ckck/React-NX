import { render } from '@testing-library/react';

import BookstoreHome from './bookstore-home';

describe('BookstoreHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookstoreHome />);
    expect(baseElement).toBeTruthy();
  });
});
