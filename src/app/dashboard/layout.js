"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/src/utils/check-auth";
import MobileNavbar from "@/src/components/navbars/MobileNavbar";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState();

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();
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
