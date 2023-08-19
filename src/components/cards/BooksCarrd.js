import Image from "next/image";
import { dummiesThumbnailBooks } from "@/dummies";

export default function BooksCard() {
  return (
    <div className="books-card-wrapper">
      <div>
        {dummiesThumbnailBooks?.map((card) => (
          <div className="cards-thumbnail">
            <div>
              <Image src={card.imgPath} width={200}/>
            </div>

            <div>
              <h1>{card.title}</h1>
              <span>{card.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
