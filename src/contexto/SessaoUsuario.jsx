import { createContext, useContext, useState } from "react";
import http from "../http";
import { ArmazenadorToken } from "../utils/ArmazenadorTokens";

const SessaoUsuarioContext = createContext({
  usuarioEstaLogado: false,
  login: (email, senha) => null,
  logout: () => null,
  perfil: {},
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
};

export const SessaoUsuarioProvider = ({ children }) => {
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(!!ArmazenadorToken.accessToken);
  const login = (email, senha) => {
    http
      .post("/auth/login", {
        email,
        senha,
      })
      .then((resposta) => {
        ArmazenadorToken.definirTokens(
          resposta.data.accessToken
          );
        setUsuarioEstaLogado(true);
        console.log(usuarioEstaLogado)
      })
      .catch((erro) => console.error(erro));
  };

  const logout = () => {
    ArmazenadorToken.efetuarLogout();
    setUsuarioEstaLogado(false);
  };

  const value = {
    login,
    usuarioEstaLogado,
    logout,
  };
  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
