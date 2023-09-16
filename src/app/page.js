"use client";

import * as React from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";

import "aos/dist/aos.css";
import Aos from "aos";
import LayoutMobile from "../components/layouts/LayoutMobile";
import MobileNavbar from "../components/navbars/MobileNavbar";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import CustomizedSnackbars from "../components/snackbars";
import DesktopScreen from "../components/ui/DesktopScreen";
import Alert from "@mui/material/Alert";

export const MobileScreen = () => {
  return (
    <>
      <MobileNavbar />
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <LayoutMobile />
      </div>
    </>
  );
};

export default function RootExplorer({ searchParams }) {
  const windowSize = useWindowSize();
  const router = useRouter();
  const openModalLogin = searchParams?.modal_login;
  const openModalRegister = searchParams?.modal_register;

  const [isOpenSnackbar, setIsOpenSnackbar] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [snackbarState, setSnackbarState] = useState({
    isOpenSnackbar: false,
    isError: false,
    isSuccess: false,
    messageSnackbar: "",
  });

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
        setIsLoading(false);
        setSnackbarState((prevState) => ({
          ...prevState,
          isOpenSnackbar: true,
          isSuccess: true,
          isError: false,
          messageSnackbar: "Successfully logged in!",
        }));
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      }
    } catch (error) {
      setIsLoading(false);
      console.log({ error });
      setSnackbarState((prevState) => ({
        isOpenSnackbar: true,
        isSuccess: false,
        isError: true,
        messageSnackbar: error?.response?.data?.message,
      }));

      setTimeout(() => {
        setSnackbarState((prevState) => ({
          ...prevState,
          isOpenSnackbar: false,
        }));
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
      <CustomizedSnackbars
        isOpenSnackbar={snackbarState?.isOpenSnackbar}
        variant={snackbarState.isSuccess ? "success" : "error"}
        message={snackbarState?.messageSnackbar}
      />
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
