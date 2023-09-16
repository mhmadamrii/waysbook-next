"use client";

import React, { useEffect, useContext, useCallback } from "react";
import Aos from "aos";
import LayoutDesktop from "../layouts/LayoutDesktop";
import BooksCard from "../cards/BooksCarrd";
import ListBooks from "../list-books/ListBooks";
import DesktopNavbar from "../navbars/DesktopNavbar";
import AuthenticatedNavbar from "../navbars/AuthenticatedNavbar";

import { usePathname } from "next/navigation";
import { CartContext } from "@/contexts/cart-context";

const DesktopScreen = () => {
  const { cart, addToCart } = useContext(CartContext);

  const pathname = usePathname();
  const handleAddToCart = useCallback(
    (itemShape) => {
      const { id: idBook, desc, imgPath, title } = itemShape;
      const newItem = {
        id: idBook,
        item: title,
      };

      addToCart(newItem);
    },
    [cart]
  );

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
        <BooksCard onAddToCart={handleAddToCart} />
      </div>

      <div>
        <ListBooks />
      </div>
    </>
  );
};

export default DesktopScreen;
