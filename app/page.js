"use client"

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';



// screens
import Homepage from "@/pages/homepage";
import Authentication from "@/screens/authentication";

export default function Home() {

  const [isLogin, setIsLogin] = useState(false)

  return isLogin ? <Homepage /> : <Authentication />;
}