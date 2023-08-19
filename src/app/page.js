"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import DesktopNavbar from "../components/navbars/DesktopNavbar";
import LayoutDesktop from "../components/layouts/LayoutDesktop";
import ListBooks from "../components/list-books/ListBooks";
import MobileNavbar from "../components/navbars/MobileNavbar";

const DesktopScreen = () => {
  return (
    <>
      <div className="page-layout-desktop">
        <DesktopNavbar />
        <LayoutDesktop />
      </div>

      <div className="page-layout-desktop-bottom">
        <ListBooks />
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
  console.log(windowSize);
  return <>{windowSize.width < 500 ? <MobileScreen /> : <DesktopScreen />}</>;
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
