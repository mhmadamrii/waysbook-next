"use client"

import { useUserContext } from "@/contexts/user-context";
import { useRouter } from "next/navigation";


export default function Homepage() {
  const router = useRouter()
  const { isLogin, user } = useUserContext()
  console.log('isLogin', isLogin)
  if (!isLogin) {
    router.push("/authentication")
  }
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
