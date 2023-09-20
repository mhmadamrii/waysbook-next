"use client";

import React, { useEffect, useContext, useCallback } from "react";
import Aos from "aos";
import LayoutDesktop from "./layouts/LayoutDesktop";
import BooksCard from "./cards/BooksCarrd";
import ListBooks from "./list-books/ListBooks";
import UnAuthenticatedNavbar from "./navbars/UnAuthenticatedNavbar";
import AuthenticatedNavbar from "./navbars/AuthenticatedNavbar";

import { usePathname } from "next/navigation";
import { CartContext } from "@/contexts/cart-context";
import { AuthContext } from "@/contexts/user-context";
import MobileNavbar from "./navbars/MobileNavbar";

const UnAuthenticatedScreen = (props) => {
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
      <div className="display-mobile-navbar">
        <MobileNavbar />
      </div>

      <div className="page-layout-desktop">
        {pathname === "/" ? <UnAuthenticatedNavbar /> : <AuthenticatedNavbar />}
        <LayoutDesktop />
      </div>

      <div className="page-layout-desktop-bottom">
        <BooksCard onAddToCart={handleAddToCart} {...props} />
      </div>

      <div>
        <ListBooks />
      </div>
    </>
  );
};

export default UnAuthenticatedScreen;
