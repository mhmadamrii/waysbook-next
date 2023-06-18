import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { AppBar, AppBarNav, AppBarTitle, AppBarAction } from "@react-md/app-bar";
import { MenuSVGIcon, MoreVertSVGIcon } from "@react-md/material-icons";

/* compoents */
import ModalLogin from "../modal-login";

/* sources */
import Logo from "@/assets/Logo.png";
import ModalRegister from "../modal-register/ModalRegister";

export const NavbarAdmin = () => {
  return <h1>Navbar admin</h1>;
};

export const NavbarUser = () => {
  return <h1>Navbar user</h1>;
};

export const NavbarAuth = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);

  const closeModal = () => {
    setIsOpenModalLogin(false);
    setIsOpenModalRegister(false);
  };
  return (
    <>
      <div className="use-conditional-media-appbar">
        <AppBar theme="clear">
          <AppBarNav aria-label="Navigation">
            <MenuSVGIcon />
          </AppBarNav>
          <AppBarTitle>Hello world</AppBarTitle>
          <AppBarAction last aria-label="Actions">
            <MoreVertSVGIcon />
          </AppBarAction>
        </AppBar>
      </div>

      <div className={styles._wrapperContainer}>
        <div>
          <Image src={Logo} className={styles._brandLogo} alt="brand" />
        </div>

        <div className={styles._btnGroup}>
          <button className="btn btn-outline-dark" style={{ width: 100 }} onClick={() => setIsOpenModalLogin(true)}>
            Login
          </button>
          <button className="btn btn-dark" style={{ width: 100 }} onClick={() => setIsOpenModalRegister(true)}>
            Register
          </button>
        </div>
      </div>

      <ModalLogin isOpenModalLogin={isOpenModalLogin} closeModal={closeModal} />
      <ModalRegister isOpenModalRegister={isOpenModalRegister} closeModal={closeModal} />
    </>
  );
};
