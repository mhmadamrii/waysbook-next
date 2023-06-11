import React, { useState, useEffect } from "react";

/* components */
import { NavbarAdmin, NavbarAuth, NavbarUser } from "@/components/navbar";


export default function Authentication() {
  return (
    <>
      <NavbarAuth />
      <main>
        <h1>true auth page</h1>
      </main>
    </>
  );
}
