import Image from "next/image";
import { dummiesThumbnailBooks } from "@/dummies";

export default function ListBooks(props) {
  return (
    <div className="layout-desktop-bottom">
      <div className="lists-books-thumbnail">
        {dummiesThumbnailBooks?.map((book) => (
          <BooksTile title={book?.title} desc={book?.desc} img={book?.imgPath} />
        ))}
      </div>
    </div>
  );
}

const BooksTile = (props) => {
  const { title, desc, img } = props;
  return (
    <div className="books-with-title">
      <div>
        <Image src={img} width={150} height={250} alt="books" />
      </div>
      <div>
        <h1>{title}</h1>
        <span>{desc}</span>
      </div>
    </div>
  );
};
