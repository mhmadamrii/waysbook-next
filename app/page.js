import React from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const isLogin = false;
  if (!isLogin) {
    redirect("/login");
  }
  return (
    <main>
      <h1>Hello world</h1>
    </main>
  );
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
