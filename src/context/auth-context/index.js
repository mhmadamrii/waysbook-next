"use client";

import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext({
  user: {},
  setUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: "default",
    email: "default@gmail.com",
    token: "",
  });

  const login = (user) => {
    setUser(user);
  };

  const logout = (user) => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
