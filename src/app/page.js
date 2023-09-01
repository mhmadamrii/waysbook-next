"use client";

import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import Aos from "aos";
import "aos/dist/aos.css";
import DesktopNavbar from "../components/navbars/DesktopNavbar";
import LayoutDesktop from "../components/layouts/LayoutDesktop";
import LayoutMobile from "../components/layouts/LayoutMobile";
import BooksCard from "../components/cards/BooksCarrd";
import MobileNavbar from "../components/navbars/MobileNavbar";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";

const DesktopScreen = () => {
  return (
    <>
      <div data-aos="fade-down" className="page-layout-desktop">
        <DesktopNavbar />
        <LayoutDesktop />
      </div>

      <div data-aos="fade-up" className="page-layout-desktop-bottom">
        <BooksCard />
      </div>
    </>
  );
};

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

export default function RootExplorer({ searchParams }) {
  const windowSize = useWindowSize();
  const openModalLogin = searchParams?.modal_login;
  const openModalRegister = searchParams?.modal_register;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {openModalLogin === "true" ? (
        <LoginModal />
      ) : openModalRegister === "true" ? (
        <RegisterModal />
      ) : null}
      {windowSize.width < 700 ? <MobileScreen /> : <DesktopScreen />}
    </>
  );
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
