import {
  AppDispatch,
  checkout,
  selectAllCart,
  selectOrderId,
  selectTotal,
} from '@react-nx/bookstore/shared/redux';
import { Card } from '@react-nx/bookstore/shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import styles from './bookstore-cart.module.scss';

type ButtonElType = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector(selectAllCart);
  const totalPrice = useSelector(selectTotal);
  const orderId = useSelector(selectOrderId);

  const checkoutHandler = (e: ButtonElType) => {
    e.preventDefault();
    dispatch(checkout(cartItems));
  };

  return (
    <div className={styles['container']}>
      <h1 data-testid="book-title-test">My Cart</h1>
      {orderId ? (
        <p>
          Thank you for ordering. Your order number is{' '}
          <strong>#{orderId}</strong>.
        </p>
      ) : (
        <>
          <div className={styles['wrapper__no-border']}>
            {cartItems.map((book) => (
              <Card key={book.id} book={book} type="cart" />
            ))}
          </div>
          <p className={styles['total']}>{`Total: $${totalPrice.toFixed(
            2
          )}`}</p>
          {totalPrice > 0 && (
            <button
              className={styles['card__detail-add-btn']}
              onClick={(e) => checkoutHandler(e)}
            >
              Checkout
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
