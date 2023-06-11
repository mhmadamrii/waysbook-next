import React, { useState } from "react";
import ModalRegister from "./ModalRegister";

/* logics */

const ModalRegisterContainer = (props) => {
  const { isOpenModalRegister, closeModal } = props;
  return <ModalRegister isOpenModalRegister={isOpenModalRegister} closeModal={closeModal} />;
};

export default ModalRegisterContainer;
