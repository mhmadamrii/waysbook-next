"use client";

import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  _errorHelper: {
    color: "red",
  },
  textField: {
    marginBottom: 10,
  },
});

const InputField = (props) => {
  const { handleChange, name } = props;
  const classes = useStyles();
  return (
    <>
      <TextField
        {...props}
        name={name}
        variant="outlined"
        fullWidth
        onChange={handleChange}
        className={classes.textField}
        inputProps={{
          style: {
            height: 15,
            width: 350,
            borderRadius: 10,
          },
        }}
      />
      {/* <Typography className={classes._errorHelper}>Testing</Typography> */}
    </>
  );
};

export default InputField;
