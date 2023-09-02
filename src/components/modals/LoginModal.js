"use client";

import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import makeStyles from "@mui/styles/makeStyles";

import { useRouter } from "next/navigation";
import InputField from "../input-groups/InputField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  _buttonLogin: {
    backgroundColor: "black",
    color: "white",
    transition: "background-color 0.3s",
    height: 50,
    "&:hover": {
      backgroundColor: "gray",
    },
  },
});

export default function LoginModal(props) {
  const classes = useStyles();
  const router = useRouter();

  const { handleChange, handleSubmit } = props;

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
            <InputField name="email" type="email" handleChange={handleChange} />
            <InputField
              name="password"
              type="password"
              handleChange={handleChange}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            className={classes._buttonLogin}
          >
            Login
          </Button>
        </DialogActions>
        <DialogTitle>
          Don't have an account?
          <Link href="#"> Klik Here</Link>
        </DialogTitle>
      </Dialog>
    </>
  );
}
