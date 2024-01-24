import React, { createContext, useState, useEffect } from "react";
import http from "../http";
import api from "../http";
import { ArmazenadorToken } from "../utils/ArmazenadorTokens";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = ArmazenadorToken.accessToken;
    if (token) {
      api.defaults.headers.Authorization = token;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(email, senha) {
    await api
      .post("/auth/login", {
        email,
        senha,
      })
      .then((resposta) => {
        ArmazenadorToken.definirTokens(resposta.data.accessToken);
      })
      .catch((erro) => {
        console.error(erro);
      });
    setAuthenticated(true);
  }
  async function handleLogout() {
    setAuthenticated(false);
    ArmazenadorToken.efetuarLogout();
    api.defaults.headers.Authorization = undefined;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, loading }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
