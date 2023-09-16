"use client";

import MobileNavbar from "../navbars/MobileNavbar";
import LayoutMobile from "../layouts/LayoutMobile";

const MobileScreen = () => {
  return (
    <>
      <MobileNavbar />
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <LayoutMobile />
      </div>
    </>
  );
};

export default MobileScreen;
