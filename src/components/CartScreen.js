'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { Icon, IconButton } from '@mui/material';
import { CartContext } from '@/contexts/cart-context';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'black',
  },
  deleteBtn: {
    height: 40,
  },
});

export default function CartScreen() {
  const classes = useStyles();
  const { cart, removeFromCart } = useContext(CartContext);
  console.log('cart', cart);

  const handleDeleteItem = (id) => {
    console.log('id', id);
    removeFromCart(id);
  };

  return (
    <>
      <div>
        <div>
          <h1>My Cart</h1>
          <h4>Review your order</h4>
        </div>

        <div className="cart-item-container">
          <div className="cart-item-lists">
            {cart?.map((item, idx) => {
              return (
                <div key={idx} className="items-list-product">
                  <div className="items-cart">
                    <Image
                      src={item?.img?.src}
                      width={130}
                      height={175}
                      alt="lists-item"
                    />
                    <div>
                      <h2>{item?.item}</h2>
                    </div>
                  </div>
                  <IconButton
                    className={classes.deleteBtn}
                    onClick={() => handleDeleteItem(item?.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            })}
          </div>

          <div className="cart-payment"></div>
        </div>
      </div>
    </>
  );
}
