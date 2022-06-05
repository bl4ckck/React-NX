import type {
  BookType,
  OrderType,
} from '@react-nx/bookstore/shared/data-access';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const CART_FEATURE_KEY = 'cart';

export interface CartState extends EntityState<BookType> {
  cartStatus: 'not loaded' | 'loading' | 'ordered' | 'error';
  orderId: string | null;
  error: string | null;
}

export const cartAdapter = createEntityAdapter<BookType>();

export const checkout = createAsyncThunk<OrderType, BookType[]>(
  'cart/fetchOrderId',
  (items) => Promise.resolve({ orderId: 'order-id-123' })
);

export const initialCartState: CartState = cartAdapter.getInitialState({
  cartStatus: 'not loaded',
  orderId: null,
  error: null,
});

export const cartSlice = createSlice({
  name: CART_FEATURE_KEY,
  initialState: initialCartState,
  reducers: {
    add: cartAdapter.addOne,
    addMany: cartAdapter.addMany,
    remove: cartAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkout.pending, (state: CartState) => {
        state.cartStatus = 'loading';
      })
      .addCase(
        checkout.fulfilled,
        (state: CartState, action: PayloadAction<OrderType>) => {
          state.orderId = action.payload.orderId;
          state.cartStatus = 'ordered';
        }
      )
      .addCase(checkout.rejected, (state: CartState, action) => {
        state.cartStatus = 'error';
        state.error = action.error.message as string | null;
      });
  },
});

/*
 * Export reducer & actions
 */
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

/**
 * Selectors
 */
const { selectAll, selectEntities } = cartAdapter.getSelectors();

export const getCartState = (rootState: any): CartState =>
  rootState[CART_FEATURE_KEY];

export const selectAllCart = createSelector(getCartState, selectAll);

export const selectCartEntities = createSelector(getCartState, selectEntities);

export const selectOrderId = createSelector(
  getCartState,
  (state) => state.orderId
);

export const selectTotal = createSelector(selectAllCart, (items) =>
  items.reduce((total, item) => total + item.price, 0)
);
