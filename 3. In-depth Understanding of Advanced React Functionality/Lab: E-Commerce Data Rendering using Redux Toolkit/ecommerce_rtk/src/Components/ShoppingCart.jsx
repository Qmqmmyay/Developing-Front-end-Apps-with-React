import React, { useMemo } from 'react';
import './ShoppingCart.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increase, decrease } from './CartSlice';

const ShoppingCart = () => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Memoize cart item elements
  const cartItemElements = useMemo(() => 
    items.map(item => (
      <li key={item.id} className="cart-item">
        <span>{item.name}</span>
        <div className="quantity-controls">
          <button onClick={() => dispatch(decrease(item))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increase(item))}>+</button>
        </div>
        <span>${item.price * item.quantity}</span>
        <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
      </li>
    )),
    [items, dispatch]
  );

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItemElements}
      </ul>
      <div className="cart-total">
        <strong>Total: ${totalAmount}</strong>
      </div>
    </div>
  );
};

export default ShoppingCart;
