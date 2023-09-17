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
import UnAuthenticatedScreen from "../components/UnAuthenticatedScreen";
import MobileScreen from "../components/MobileScreen";

export default function RootExplorer({ searchParams }) {
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
      const baseURL = "https://express-creation-mhmadamrii.vercel.app/api/v1/sign-in";
      const response = await axios.post(baseURL, payload);
      if (response.status === 200) {
        Cookies.set("UserToken", response?.data?.token, { expires: 7 });
        console.log(response.status);
        enqueueSnackbar("Login success", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
        setTimeout(() => {
          enqueueSnackbar(`Welcome ${response?.data?.user?.username}`, {
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
          });
          setIsLoading(false);
          router.push("/dashboard");
        }, 1500);
      }
    } catch (error) {
      console.log({ error });
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
      const baseURL = "https://express-creation-mhmadamrii.vercel.app/api/v1/sign-up";
      const response = await axios.post(baseURL, payload);
      console.log("response", response);
      if (response?.status === 200) {
        setIsLoading(false);
        enqueueSnackbar("Register success", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.log({ error });
    }
  }, [formRegister]);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    return () => setIsLoading(false)
  }, [])

  return (
    <>
      {openModalLogin === "true" ? <LoginModal handleChange={handleChangeLogin} handleSubmit={handleSubmitLogin} isLoading={isLoading} /> : openModalRegister === "true" ? <RegisterModal handleChange={handleChangeRegister} handleSubmit={handleSubmitRegister} isLoading={isLoading} /> : null}
      <UnAuthenticatedScreen />
    </>
  );
}

// https://www.figma.com/file/rXl0nsOYHUzMoVrd1qwjP5/Ways-Books?type=design&node-id=0-1&mode=design
