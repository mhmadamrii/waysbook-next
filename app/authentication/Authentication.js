import styles from "./styles.module.css";
import Image from "next/image";
import "@/app/globals.css";

/* assets */
import Book1 from "@/assets/book1.png";
import Book2 from "@/assets/book2.png";

export default function Authentication() {
  return (
    <>
      <div className={styles.thumbnail}>
        <h1>With us, you can shop online & help</h1>
        <h1>save your high street at the same time</h1>
      </div>

      <div className={styles.imagesGroupWrapper}>
        <div className={styles.staticUiGroupd}>
          <div className="img-hover-zoom">
            <Image src={Book1} className="img-hover-image" alt="book" />
          </div>

          <div className={styles.wrapperContentDesc}>
            <h1>Sebuah Seni untuk bersikap Bodo Amat</h1>
            <span></span>
            <p>Nisi officia commodo velit cillum tempor cillum qui in laboris. Ex minim ea sunt in. Anim ut ad reprehenderit sint laborum veniam fugiat aute dolor veniam sint laborum esse.</p>
          </div>
        </div>

        <div className={styles.staticUiGroupd}>
          <div className="img-hover-zoom">
            <Image src={Book2} className="img-hover-image" alt="book" />
          </div>

          <div className={styles.wrapperContentDesc}>
            <h1>Warm Heart</h1>
          </div>
        </div>
      </div>
    </>
  );
}
