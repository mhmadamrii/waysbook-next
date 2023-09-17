"use client";

import Image from "next/image";
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {dummiesThumbnailBooks} from "@/dummies";
import {useSnackbar} from "notistack";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "black",
  },
});

export default function BooksCard({onAddToCart}) {
  const classes = useStyles();
  const isLogin = false;
  const {enqueueSnackbar} = useSnackbar();

  const handleAddToCart = (card) => {
    onAddToCart(card);
    enqueueSnackbar("Item added to cart!", {
      variant: "success",
      autoHideDuration: 1000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  return (
    <div className="books-card-wrapper">
      <div>
        {dummiesThumbnailBooks?.map((card, idx) => (
          <div className="cards-thumbnail" key={idx}>
            <div onClick={() => onAddToCart(card)}>
              <Image src={card.imgPath} width={200} alt="book cards" />
            </div>

            <div>
              <h1>{card.title}</h1>
              <span>{card.desc}</span>
              <Button variant="contained" className={classes.btn} fullWidth onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
