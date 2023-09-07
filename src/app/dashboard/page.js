"use client";

import { useAuth } from "@/src/context/auth-context";
import Cookies from "js-cookie";

export default function Dashboard() {
  const { user } = useAuth();

  const handleSetCookie = () => {
    console.log("click");
    Cookies.set("Testing", "Hello world", { expires: 7 });
  };
  console.log(user);
  return (
    <div>
      <h1>super secreet dashboard</h1>
      <button onClick={handleSetCookie}>set COOKIES</button>
    </div>
  );
}
