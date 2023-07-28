import styles from "./styles.module.css";
import Image from "next/image";
import "@/app/globals.css";

import { dummiesThumbnailBooks } from "@/dummies";
import ListAvailableBooks from "@/components/list-available-books";

const getListOfBooks = async () => {
  const baseURL = "https://express-creation.vercel.app/api/v1/users";
  const secondUrl = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(secondUrl);
  return res.json();
};

async function getDatas() {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(baseUrl);
  return res.json();
}
export default async function Authentication(props) {
  // const data = await getListOfBooks();
  // console.log("dataaaa", data);
  // const datas = await getDatas();
  // console.log(datas);
  console.log("fjdksf");
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
                <div key={item?.key} className={styles._wrappered}>
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

      <div className={styles.bottomGroups}>{/* <ListAvailableBooks /> */}</div>
    </>
  );
}
