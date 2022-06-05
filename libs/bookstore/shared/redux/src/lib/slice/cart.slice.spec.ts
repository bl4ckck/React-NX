import { bookFixtureList } from '@react-nx/bookstore/shared/data-access';
import {
  checkout,
  cartAdapter,
  cartReducer,
  cartActions,
  initialCartState,
  CartState,
} from './cart.slice';

describe('cart reducer', () => {
  it('should handle initial state', () => {
    const expected = cartAdapter.getInitialState({
      cartStatus: 'not loaded',
      orderId: null,
      error: null,
    });

    expect(cartReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should add many book item', () => {
    const expected = cartReducer(
      initialCartState,
      cartActions.addMany(bookFixtureList)
    );
    // entity items should be more than 0
    expect(Object.keys(expected.entities).length).toBeGreaterThan(0);
    // compare value of first id item
    expect(expected.entities['1']).toEqual(bookFixtureList[0]);
  });

  it('should remove book item', () => {
    const state: CartState = {
      ...initialCartState,
      entities: {
        1: bookFixtureList[0],
      },
    };

    const expected = cartReducer(state, cartActions.remove(1));
    // entity should be empty
    expect(Object.keys(expected.entities).length).toEqual(0);
  });

  it('should handle fetchCarts', () => {
    let state = cartReducer(undefined, checkout.pending('', bookFixtureList));

    expect(state).toEqual(
      expect.objectContaining({
        cartStatus: 'loading',
      })
    );

    state = cartReducer(
      state,
      checkout.fulfilled({ orderId: '123' }, '', bookFixtureList)
    );

    expect(state).toEqual(
      expect.objectContaining({
        cartStatus: 'ordered',
        entities: {},
        error: null,
      })
    );

    state = cartReducer(
      state,
      checkout.rejected(new Error('Order failed'), '', bookFixtureList)
    );

    expect(state).toEqual(
      expect.objectContaining({
        cartStatus: 'error',
        error: 'Order failed',
        entities: {},
      })
    );
  });
});
