import styles from "./styles.module.css";
import Image from "next/image";
import "@/app/globals.css"

/* assets */
import Book1 from "@/assets/book1.png"
import Book2 from "@/assets/book2.png"

export default function Authentication() {
  return (
    <>
      <div className={styles.thumbnail}>
        <h1>With us, you can shop online & help</h1>
        <h1>save your high street at the same time</h1>
      </div>

      <div className={styles.imagesGroupWrapper}>
        <div className="img-hover-zoom">
          <Image src={Book1} className="img-hover-image" alt="book" />
        </div>

        <div className="img-hover-zoom">
          <Image src={Book2} className="img-hover-image" alt="book" />
        </div>
      </div>
    </>
  );
}
