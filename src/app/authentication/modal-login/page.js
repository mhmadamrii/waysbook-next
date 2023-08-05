"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalLogin() {
  const router = useRouter();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    router.back();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin;
