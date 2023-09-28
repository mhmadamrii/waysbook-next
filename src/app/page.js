"use client";

import React, {useState} from "react";

import Navbar from "../components/dashboard-ragdalion/navbar";
import Sidebar from "../components/dashboard-ragdalion/sidebar";
import TableRDG from "../components/dashboard-ragdalion/table";
import AddUserPage from "../components/dashboard-ragdalion/add-user";

export default function Root() {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "tes",
      email: "admin@gmail.com",
      role: "admin",
      isActive: false,
      action: null,
    },
  ]);

  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    // Update the corresponding field in inputFields state
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const handleAddUser = () => {
    // Create a new user object based on inputFields state
    const newUser = {
      id: rows.length + 1,
      ...inputFields,
      isActive: true, // You can set isActive to the desired value
      action: null,
    };

    // Update the rows state with the new user
    setRows([...rows, newUser]);

    // Clear the input fields
    setInputFields({
      name: "",
      email: "",
      role: "",
    });
  };

  const [state, setState] = useState({
    activeStep: 0,
  });

  const handleChangeActive = (step) => {
    setState((prevState) => ({
      ...prevState,
      activeStep: step,
    }));
  };
  return (
    <>
      <Sidebar onChangeActive={handleChangeActive} />
      <Navbar />
      {state.activeStep === 0 ? <TableRDG rows={rows} /> : state.activeStep === 1 ? <AddUserPage handleAddUser={handleAddUser} handleChangeInput={handleChangeInput} inputFields={inputFields} /> : null}
    </>
  );
}
