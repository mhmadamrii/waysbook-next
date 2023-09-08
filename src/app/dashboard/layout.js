"use client";

import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import AuthenticatedNavbar from "@/src/components/navbars/AuthenticatedNavbar";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(true);

  const handleLogOut = async () => {
    console.log("removing");
    const { data } = await axios.post("/api/auth/logout", {});
  };

  useEffect(() => {
    // sementara
    // setTimeout(() => {
    //   setIsSuccess(true);
    // }, 1000);
    // (async () => {
    //   const { user, error } = await getUser();
    //   if (user) {
    //     setIsSuccess(true);
    //   }
    //   console.log(user);
    //   if (error) {
    //     router.push("/");
    //     return;
    //   }
    // })();

    /* asynchronous baru tanpa redirect */
    (async () => {
      const { user, error } = await getUser();
      console.log(user);
      console.log(error);
      if (error) {
        router.push("/");
      }
      console.log(user);
      console.log(error);
    })();
  }, []);

  if (!isSuccess) {
    return (
      <center>
        <h1>Loading stream........</h1>
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
    console.log(data);

    return {
      user: data,
      error: null,
    };
  } catch (e) {
    console.log({ e });
    return {
      user: null,
      error: e,
    };
  }
}
