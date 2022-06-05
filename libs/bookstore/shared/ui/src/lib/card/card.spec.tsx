import '@testing-library/jest-dom';

import { bookFixtureList } from '@react-nx/bookstore/shared/data-access';
import { render, screen } from '@testing-library/react';

import Card from './card';
import { Provider } from 'react-redux';
import { store } from '@react-nx/bookstore/shared/redux';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement, queryByTestId } = render(
      <Provider store={store}>
        <Card book={bookFixtureList[0]} />
      </Provider>
    );
    expect(queryByTestId('rating-test')).toBeInTheDocument();
    expect(baseElement).toBeTruthy();
  });

  it('should render cart type', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Card book={bookFixtureList[0]} type="cart" />
      </Provider>
    );
    expect(queryByTestId('rating-test')).not.toBeInTheDocument();
  });
});
