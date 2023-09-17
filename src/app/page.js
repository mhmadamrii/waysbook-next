"use client";

import * as React from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import { useSnackbar } from "notistack";

import "aos/dist/aos.css";
import Aos from "aos";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import DesktopScreen from "../components/ui/DesktopScreen";
import MobileScreen from "../components/ui/MobileScreen";

export default function RootExplorer({ searchParams }) {
  const windowSize = useWindowSize();
  const router = useRouter();
  const openModalLogin = searchParams?.modal_login;
  const openModalRegister = searchParams?.modal_register;

  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeLogin = useCallback(
    (e) => {
      const name = e.target.name;
      setFormLogin((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    },
    [formLogin?.email, formLogin?.password]
  );

  const handleChangeRegister = useCallback(
    (e) => {
      const name = e.target.name;
      setFormRegister((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    },
    [formRegister?.email, formRegister?.password]
  );

  const handleSubmitLogin = useCallback(async () => {
    setIsLoading(true);
    const payload = {
      email: formLogin?.email,
      password: formLogin?.password,
    };

    try {
      const baseURL =
        "https://express-creation-mhmadamrii.vercel.app/api/v1/sign-in";
      const response = await axios.post(baseURL, payload);
      console.log("response login", response);
      if (response.status === 200) {
        Cookies.set("UserToken", response?.data?.token, { expires: 7 });
        console.log(response.status);
        enqueueSnackbar("Login success", { variant: "success" });
        setTimeout(() => {
          setIsLoading(false);
          router.push("/dashboard");
        }, 1500);
      }
    } catch (error) {
      setIsLoading(false);
      console.log({ error });

      setTimeout(() => {
      }, 2000);
    }
  }, [formLogin]);

  const handleSubmitRegister = useCallback(async () => {
    setIsLoading(true);
    const payload = {
      username: formRegister?.username,
      email: formRegister?.email,
      password: formRegister?.password,
    };

    try {
      const baseURL =
        "https://express-creation-mhmadamrii.vercel.app/api/v1/sign-up";
      const response = await axios.post(baseURL, payload);
      console.log("response", response);
      if (response?.status === 200) {
        setIsLoading(false);
        setIsOpenSnackbar(true);

      }
    } catch (error) {
      setIsLoading(false);
      console.log({ error });
    }
  }, [formRegister]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {openModalLogin === "true" ? (
        <LoginModal
          handleChange={handleChangeLogin}
          handleSubmit={handleSubmitLogin}
          isLoading={isLoading}
        />
      ) : openModalRegister === "true" ? (
        <RegisterModal
          handleChange={handleChangeRegister}
          handleSubmit={handleSubmitRegister}
          isLoading={isLoading}
        />
      ) : null}
      {windowSize.width < 700 ? <MobileScreen /> : <DesktopScreen />}
    </>
  );
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
