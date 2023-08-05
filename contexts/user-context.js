"use client";

import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: {},
  setUser: () => {},
  isLogin: false,
  setIsLogin: () => {}
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false)

  const contextValue = {
    user,
    setUser,
    isLogin,
    setIsLogin
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext)
