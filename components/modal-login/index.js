import React, { useState } from "react";
import ModalLogin from "./ModalLogin";

/* logics */

const ModalLoginContainer = (props) => {
  const { isOpenModalLogin, closeModal } = props;
  return <ModalLogin isOpenModalLogin={isOpenModalLogin} closeModal={closeModal} />;
};

export default ModalLoginContainer;
