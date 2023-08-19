import { Button, Typography } from "@mui/material";
import React from "react";

const Buttonable = (props) => {
  const { variant, color, width, isBtnLogin, isBtnRegister, height, children, bgColor, ...rest } = props;
  const buttonStyle = {
    border: isBtnLogin ? "2px solid black" : null,
    backgroundColor: isBtnRegister ? "black" : "",
    color: isBtnLogin ? "black" : isBtnRegister ? "white" : "black",
    width: width || "120px",
    height: height || "40px",
  };

  return (
    <Button variant={variant || "contained"} {...rest} style={buttonStyle}>
      {children}
    </Button>
  );
};

const Typographies = (props) => {
  const { children, color, size, isBold } = props;
  console.log(props);
  const textStyle = {
    color: color || "black",
    fontSize: size ? size : "inherit",
    fontWeight: isBold ? "bold" : "inherit",
  };
  return <Typography style={textStyle}>{children}</Typography>;
};

export { Buttonable, Typographies };
