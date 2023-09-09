"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Aos from "aos";
import LayoutDesktop from "../layouts/LayoutDesktop";
import BooksCard from "../cards/BooksCarrd";
import ListBooks from "../list-books/ListBooks";
import DesktopNavbar from "../navbars/DesktopNavbar";
import AuthenticatedNavbar from "../navbars/AuthenticatedNavbar";

const DesktopScreen = () => {
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div data-aos="fade-down" className="page-layout-desktop">
        {pathname === "/" ? <DesktopNavbar /> : <AuthenticatedNavbar />}
        <LayoutDesktop />
      </div>

      <div data-aos="fade-up" className="page-layout-desktop-bottom">
        <BooksCard />
      </div>

      <div>
        <ListBooks />
      </div>
    </>
  );
};

export default DesktopScreen;
