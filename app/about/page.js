"use client";

import { useUserContext } from "@/context/userContext";

export default function About() {
  const { user, setUser } = useUserContext();
  console.log("usernya", user);
  const handleSetUser = () => {
    setUser("Hello world");
  };
  return (
    <>
      <button onClick={handleSetUser}>set user</button>
      <h1>About hahahahaha</h1>
      <h1>{user}</h1>
    </>
  );
}
