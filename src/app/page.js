"use client";

import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import Aos from "aos";
import 'aos/dist/aos.css'
import DesktopNavbar from "../components/navbars/DesktopNavbar";
import LayoutDesktop from "../components/layouts/LayoutDesktop";
import BooksCard from "../components/cards/BooksCarrd";
import MobileNavbar from "../components/navbars/MobileNavbar";

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
      <h1>Mobile Screen</h1>
    </>
  );
};

export default function RootExplorer() {
  const windowSize = useWindowSize();
  useEffect(() => {
    Aos.init()
  }, [])
  return <>{windowSize.width < 700 ? <MobileScreen /> : <DesktopScreen />}</>;
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
