"use client";

import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { useRouter } from "next/navigation";
import InputField from "../input-groups/InputField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <Dialog
        open
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <InputField name="email" type="email" />
            <InputField name="password" type="password" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleClose}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
