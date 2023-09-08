import Image from "next/image";
import { dummiesThumbnailLists } from "@/dummies";

export default function ListBooks(props) {
  return (
    <div className="layout-desktop-bottom">
      <div className="lists-books-thumbnail">
        {dummiesThumbnailLists?.map((book) => (
          <div key={book?.id}>
            <BooksTile
              title={book?.title}
              desc={book?.desc}
              img={book?.imgPath}
              author={book?.author}
              price={book?.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const BooksTile = (props) => {
  const { title, desc, img, author, price } = props;
  return (
    <div className="books-with-title" data-aos="flip-down">
      <div>
        <Image src={img} width={170} height={250} alt="books" />
      </div>
      <div>
        <h1>{title}</h1>
        <span>{desc}</span>
        <div>
          <span className="author">by {author}</span>
          <h5 style={{ color: "#44B200" }}>{price}</h5>
        </div>
      </div>
    </div>
  );
};
