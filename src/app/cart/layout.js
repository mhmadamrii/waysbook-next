"use client";

import axios from "axios";
import * as React from "react";
import { useRouter } from "next/navigation";
import AuthenticatedNavbar from "@/src/components/navbars/AuthenticatedNavbar";

export default function CartLayout({ children }) {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { user, error } = await getUser();
      console.log(user);
      if (user) {
        setIsSuccess(true);
      }
      if (error) {
        router.push("/");
      }
    })();
  }, []);

  if (!isSuccess) {
    return (
      <center>
        <h1>Loading stream.....</h1>
      </center>
    );
  }
  return (
    <main>
      <AuthenticatedNavbar />
      {children}
    </main>
  );
}

async function getUser() {
  try {
    const { data } = await axios.get("/api/me");

    return {
      user: data,
      error: null,
    };
  } catch (error) {
    console.log({ error });
    return {
      user: null,
      error,
    };
  }
}
