"use client";

import { Squash as Humberger } from "hamburger-react";
import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Humberger toggled={isOpen} toggle={setIsOpen} />
      <h1>lorem ipsum</h1>
    </div>
  );
}
