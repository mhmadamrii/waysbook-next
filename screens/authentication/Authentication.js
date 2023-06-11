import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "./styles.module.css"

import Image from "next/image";
import Nana from "@/assets/nana.jpg";

const Authentication = () => {
  return (
    <>
      <Container>
        <center>
          {/* <Image src={Nana} className={styles._img} alt="nana" /> */}
        </center>
      </Container>
    </>
  );
};

export default Authentication;
