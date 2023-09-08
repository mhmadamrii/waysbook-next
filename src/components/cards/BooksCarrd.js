import Image from "next/image";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { dummiesThumbnailBooks } from "@/dummies";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "black",
  },
});

export default function BooksCard() {
  const classes = useStyles();
  return (
    <div className="books-card-wrapper">
      <div>
        {dummiesThumbnailBooks?.map((card) => (
          <div className="cards-thumbnail" key={card?.id}>
            <div>
              <Image src={card.imgPath} width={200} alt="book cards" />
            </div>

            <div>
              <h1>{card.title}</h1>
              <span>{card.desc}</span>
              <Button variant="contained" className={classes.btn} fullWidth>
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
