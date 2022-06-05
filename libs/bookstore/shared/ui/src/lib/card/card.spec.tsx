import '@testing-library/jest-dom';

import { bookFixtureList } from '@react-nx/bookstore/shared/data-access';
import { render, screen } from '@testing-library/react';

import Card from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement, queryByTestId } = render(
      <Card book={bookFixtureList[0]} />
    );
    expect(queryByTestId('rating-test')).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it('should render cart type', () => {
    const { queryByTestId } = render(
      <Card book={bookFixtureList[0]} type="cart" />
    );
    expect(queryByTestId('rating-test')).not.toBeInTheDocument();
  });
});
