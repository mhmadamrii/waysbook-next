"use client";

import axios from "axios";
import * as React from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/src/utils/check-auth";
import AuthenticatedNavbar from "@/src/components/navbars/AuthenticatedNavbar";
import GeneralPreloader from "@/src/components/preloader.js";

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
    return <GeneralPreloader />
  }
  console.log('isSucccess', isSuccess)
  return (
    <main>
      <AuthenticatedNavbar />
      {children}
    </main>
  );
}
