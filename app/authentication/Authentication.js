import styles from "./styles.module.css";
import Image from "next/image";
import "@/app/globals.css";

/* assets */
import Book1 from "@/assets/book1.png";
import Book2 from "@/assets/book2.png";

import { dummiesThumbnailBooks } from "@/dummies";

export default function Authentication() {
  return (
    <>
      <div className={styles.thumbnail}>
        <h1>With us, you can shop online & help</h1>
        <h1>save your high street at the same time</h1>
      </div>

      <div className={styles.imagesGroupWrapper}>
        <div className={styles.staticUiGroupd}>
          {dummiesThumbnailBooks.map((item) => {
            return (
              <>
                <div className={styles._wrappered}>
                  <div className="img-hover-zoom">
                    <Image
                      src={item?.imgPath}
                      className="img-hover-image"
                      alt="book"
                    />
                  </div>

                  <div className={styles.wrapperContentDesc}>
                    <h1>{item?.title}</h1>
                    <span></span>
                    <p>{item?.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className={styles.bottomGroups}>
        <h1>hello world</h1>
      </div>
    </>
  );
}
