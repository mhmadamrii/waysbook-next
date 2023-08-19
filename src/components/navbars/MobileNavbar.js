"use client";

import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import { Squash as Humberger } from "hamburger-react";
import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mobile-navbar">
      <div data-aos="fade-right" data-aos-duration="1500">
        <Image src={Logo} width={110} height={75} alt="logo image" />
      </div>

      <div data-aos="fade-left" data-aos-duration="1500">
        <Humberger toggled={isOpen} toggle={setIsOpen} />
      </div>
    </div>
  );
}
