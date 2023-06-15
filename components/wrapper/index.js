import styles from "./styles.module.css";
import LayerLeft from "@/assets/layer1.png";
import LayerRight from "@/assets/layer2.png";

import Image from "next/image";
export default function Wrapper() {
  return (
    <>
      <div className={styles.globalWrapper}>
        <div className={styles.wrapperLayerLeft}>
          <Image src={LayerLeft} className={styles.imgWrapper} alt="book" />
        </div>

        <div className={styles.wrapperLayerRight}>
          <Image src={LayerRight} className={styles.imgWrapper} alt="book" />
        </div>
      </div>
    </>
  );
}
