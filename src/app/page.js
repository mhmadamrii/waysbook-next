import { redirect } from "next/navigation";

export default function Homepage() {
  redirect("/authentication");
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
