import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

/* sources */
import Logo from "@/assets/Logo.png";

export const NavbarAdmin = () => {
  return <h1>Navbar admin</h1>;
};

export const NavbarUser = () => {
  return <h1>Navbar user</h1>;
};

export const NavbarAuth = () => {
  return (
    <div className={styles._wrapperContainer}>
      <div>
        <Image src={Logo} className={styles._brandLogo} alt="brand" />
      </div>

      <div className={styles._btnGroup}>
        <button className="btn btn-outline-dark" style={{ width: 100 }}>Login</button>
        <button className="btn btn-dark" style={{ width: 100 }}>Register</button>
      </div>
    </div>
  );
};
