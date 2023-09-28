"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddUserPage(props) {
  const {handleAddUser, handleChangeInput, inputFields} = props;
  return (
    <div className="add-user-rdg">
      <TextField id="outlined-basic" label="name" variant="outlined" /> <br />
      <TextField id="outlined-basic" label="email" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="role" variant="outlined" /> <br />
      <Button variant="contained">Add</Button>
      <Button variant="outlined">Cancel</Button>
    </div>
  );
}
