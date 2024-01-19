/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth,setAuth] = useState({})

  return (
    <AuthContext.Provider value={{auth,setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

