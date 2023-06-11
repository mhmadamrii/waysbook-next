import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import Image from "next/image";
import Nana from "@/assets/nana.jpg";

const Authentication = () => {
  return (
    <>
      <Container>
        <center>
          <Image src={Nana} style={{ borderRadius: 10 }} />
        </center>
      </Container>
    </>
  );
};

export default Authentication;
