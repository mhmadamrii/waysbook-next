import styles from "./styles.module.css";
import LayerLeft from "@/assets/layer1.png";
import LayerRight from "@/assets/layer2.png";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
export default function Wrapper() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <>
      <div className={styles.globalWrapper}>
        <div className={styles.wrapperLayerLeft}>
          <Image src={LayerLeft} className={styles.imgLeft} alt="book" />
        </div>

        <div className={styles.wrapperLayerRight}>
          <Image src={LayerRight} className={styles.imgRight} alt="book" />
        </div>
      </div>
    </>
  );
}
