'use client';

import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log('carts', cart)

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
