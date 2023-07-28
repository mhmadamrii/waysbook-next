"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// screens
import Homepage from "@/app/homepage/page";
import Authentication from "@/app/authentication/Auth";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? <Homepage /> : <Authentication />;
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
