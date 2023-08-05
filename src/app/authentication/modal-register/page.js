"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Link from "next/link";

function ModalRegister() {
  const router = useRouter();
  const pathname = usePathname()
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    router.push("/authentication");
  };

  return (
    <>
      <div className="m-2">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" id="email" />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />
          </Modal.Body>
          <div className="d-grid gap-2 m-2">
            <Button variant="secondary" onClick={handleClose} size="lg">
              Login
            </Button>
          </div>
          <div className="m-2">
            <span>
              Already have an account?
              <Link href="/authentication/modal-login"> Click here</Link>
            </span>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ModalRegister;
