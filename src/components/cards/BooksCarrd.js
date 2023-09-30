'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { dummiesThumbnailBooks } from '@/dummies';
import { useSnackbar } from 'notistack';
import { AuthContext } from '@/contexts/user-context';
import { getUser } from '@/src/utils/check-auth';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'black',
  },
});

export default function BooksCard({ onAddToCart }) {
  console.log('dummies', dummiesThumbnailBooks);
  const classes = useStyles();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const { user } = React.useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = (card) => {
    onAddToCart(card);
    enqueueSnackbar('Item added to cart!', {
      variant: 'success',
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  const handleLoginFirst = () => {
    enqueueSnackbar('Please login first!', {
      variant: 'error',
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  };

  React.useEffect(() => {
    (async () => {
      const { user, error } = await getUser();
      if (user) {
        setIsAuthenticated(true);
      }
      if (error) {
        setIsAuthenticated(false);
        console.log('error', error);
      }
    })();
  }, []);
  return (
    <div className="books-card-wrapper">
      <div>
        {dummiesThumbnailBooks?.map((card, idx) => {
          console.log('actually', card)
          return (
            <div className="cards-thumbnail" key={idx}>
              <div>
                <Image src={card.imgPath} width={200} alt="book cards" />
              </div>

              <div className="static-width-300">
                <h1>{card.title}</h1>
                <span>{card.desc}</span>
                <Button
                  variant="contained"
                  className={classes.btn}
                  fullWidth
                  onClick={
                    isAuthenticated
                      ? () => handleAddToCart(card)
                      : () => handleLoginFirst()
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
