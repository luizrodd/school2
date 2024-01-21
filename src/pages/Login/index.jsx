import styles from "./Login.module.css";
import {  useState } from "react";
import http from "../../http";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    http
      .post("/auth/login", {
        email,
        senha,
      })
      .then((resposta) => {
        ArmazenadorToken.definirTokens(resposta.data.accessToken);
        setIsAuthenticated(true);
        navigate("/calendar")
      })
      .catch((erro) => {
        console.error(erro);
      });
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <input type="submit" value="Login" />
      </form>

      <button
        onClick={() => {
          ArmazenadorToken.efetuarLogout();
          setIsAuthenticated(false);
          navigate("/")
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
