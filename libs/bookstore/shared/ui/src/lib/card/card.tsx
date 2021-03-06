import type { BookType } from '@react-nx/bookstore/shared/data-access';
import { AppDispatch, cartActions } from '@react-nx/bookstore/shared/redux';
import { useDispatch } from 'react-redux';
import styles from './card.module.scss';

/* eslint-disable-next-line */
export interface CardProps {
  book: BookType;
  type?: 'book' | 'cart';
}
type ButtonElType = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export function Card({ book, type = 'book' }: CardProps) {
  // destructuring book props
  const { id, title, author, price, rating } = book;

  // conditions
  const isBook = type === 'book';
  const btnTitle = isBook ? 'Add to cart' : 'Remove';

  /**
   * events
   */
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = (e: ButtonElType) => {
    e.preventDefault();
    dispatch(cartActions.add(book));
    alert(`Book [${id}] "${title}" added to cart!`);
  };

  const removeCartItem = (e: ButtonElType) => {
    e.preventDefault();
    dispatch(cartActions.remove(id));
  };

  return (
    <div className={styles['card']}>
      <p className={styles['card__title']}>
        {title} by {author}
      </p>
      <div className={styles['card__detail']}>
        {isBook && (
          <p
            data-testid="rating-test"
            className={styles['card__detail-rating']}
          >
            {rating}
          </p>
        )}
        <p
          data-testid="price-test"
          className={styles[`card__detail-price${isBook ? '' : '-cart'}`]}
        >
          {`$${price}`}
        </p>
        <button
          className={styles['card__detail-add-btn']}
          onClick={(e) => (isBook ? addToCart(e) : removeCartItem(e))}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
}

export default Card;
