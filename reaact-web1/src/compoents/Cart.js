import React, { useState } from 'react';
import Header from './Header.js';

const Cart = () => {
  const [cart,] = useState([]);

  return (
    <>
    <Header/>
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      <button>Checkout</button>
    </div>
    </>
  );
};

export default Cart;