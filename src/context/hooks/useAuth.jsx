// import { useEffect, useState } from "react";
// import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
// import api from "../../http";
// import http from "../../http";

// export default function useAuth() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkToken = async () => {
//       const token = ArmazenadorToken.accessToken;
//       if (token) {
//         api.defaults.headers.Authorization = token;
//         setAuthenticated(true);
//       }
//       setLoading(false);
//     };

//     checkToken();
//   }, []); // O segundo argumento é uma lista vazia para garantir que o efeito seja executado apenas uma vez

//   function handleLogin(email, senha) {
//     http
//       .post("/auth/login", {
//         email,
//         senha,
//       })
//       .then((resposta) => {
//         ArmazenadorToken.definirTokens(resposta.data.accessToken);
//         setAuthenticated(true);
//       })
//       .catch((erro) => {
//         console.error(erro);
//       });
//   }

//   async function handleLogout() {
//     setAuthenticated(false);
//     ArmazenadorToken.efetuarLogout();
//     api.defaults.headers.Authorization = undefined;
//   }

//   return { authenticated, loading, handleLogin, handleLogout };
// }
