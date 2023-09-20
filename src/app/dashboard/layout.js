"use client";

import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MobileNavbar from "@/src/components/navbars/MobileNavbar";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(true);
  const [userAuthenticated, setUserAuthenticated] = useState();

  useEffect(() => {
    /* asynchronous baru tanpa redirect */
    (async () => {
      const { user, error } = await getUser();
      setUserAuthenticated(user);
      if (error) {
        router.push("/");
      }
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
      <div className="display-mobile-navbar">
        <MobileNavbar userAuthenticated={userAuthenticated} />
      </div>
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
  } catch (e) {
    console.log({ e });
    return {
      user: null,
      error: e,
    };
  }
}
