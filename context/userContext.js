"use client";

import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export function UserContextProvider({ children }) {
  const [state, setState] = useState();
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
