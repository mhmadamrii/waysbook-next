"use client";

const { TextField, Typography } = require("@mui/material");

const InputField = (props) => {
  return (
    <>
      <TextField
        {...props}
        variant="outlined"
        fullWidth
        inputProps={{
          style: {
            height: 15,
            width: 350,
            borderRadius: 10,
          },
        }}
      />
      <Typography>Testing</Typography>
    </>
  );
};

export default InputField;
