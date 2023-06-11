import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"

/* components */
import { NavbarAuth } from "@/components/navbar";
import Authentication from "./Authentication";

export default function AuthenticationContainer() {
  return (
    <>
      <NavbarAuth />
      <main className={styles._containerWrapper}>
        <Authentication />
      </main>
    </>
  );
}
