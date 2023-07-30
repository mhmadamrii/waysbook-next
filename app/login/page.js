"use client";
import React, { useState } from "react";
import axios from "axios";

import { Form, Button, Modal, Toast, ToastContainer } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Page() {
  const baseUrl = "https://express-creation.vercel.app/api/v1";
  const { push } = useRouter();

  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputUser, setInputUser] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${baseUrl}/sign-up`, {
        email: inputUser?.email,
        password: inputUser?.password,
      });
      if (res.status === 200) {
        handleClose();
      }
      console.log("res", res);
    } catch (error) {
      console.log(error.response);
      if (error?.response?.data) {
        console.error("failed to register!");
      }
      console.log({ error });
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/sign-in`, {
        email: inputUser?.email,
        password: inputUser?.password,
      });
      if (res?.data?.status === "success") {
        localStorage.setItem("token-user", res?.data?.token);
        push(`/homepage/${res?.data?.user?.email}`);
        console.log("yey");
      }
      console.log("response login", res);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <main>
        <center>
          <Button variant="success" onClick={handleShow}>
            Login here
          </Button>
        </center>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
            <Form.Control
              disabled={isLoading}
              onChange={(e) =>
                setInputUser((prevInput) => ({
                  ...prevInput,
                  email: e?.target?.value,
                }))
              }
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              disabled={isLoading}
              onChange={(e) =>
                setInputUser((prevInput) => ({
                  ...prevInput,
                  password: e?.target?.value,
                }))
              }
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
}

const ToastError = () => {
  return <div></div>;
};
