'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { Button, IconButton } from '@mui/material';
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
  payButton: {
    backgroundColor: 'black',
    color: '#FFFF',
    width: 300,
    marginTop: 30,
    '&:hover': {
      backgroundColor: '#cccccc',
      color: 'black',
    },
  },
});

export default function CartScreen() {
  const classes = useStyles();
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItemPrice = cart.map((item) => item.price) || null;
  const totalPrice = totalItemPrice.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  const handleDeleteItem = (id) => {
    console.log('id', id);
    removeFromCart(id);
  };

  function addThousandSeparator(number) {
    if (typeof number !== 'number') {
      return 'Invalid input';
    }
    return number.toLocaleString();
  }

  return (
    <div style={{ padding: '0 30px', marginBottom: 100 }}>
      <div className="cart-divider">
        <h1>My Cart</h1>
        <h4>Review your order</h4>
      </div>

      <div className="cart-item-container">
        <div className="cart-item-lists">
          {cart?.map((item, idx) => {
            console.log('item', item);
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
                    <span style={{ color: '#929292' }}>By. {item?.author}</span>
                    <h3 className="item-price">$ {item?.price}</h3>
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

        <div className="cart-payment">
          <div>
            <h3>Subtotal</h3>
            <h3>4000</h3>
          </div>

          <div>
            <h3>Total</h3>
            <h3>$ {addThousandSeparator(totalPrice)}</h3>
          </div>

          <div className="payment-buttons">
            <Button fullWidth variant="contined" className={classes.payButton}>
              Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
