"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// screens
import Homepage from "@/app/homepage/page";
import Authentication from "@/app/authentication";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? <Homepage /> : <Authentication />;
}
