import styles from "./Login.module.css";
import {  useState } from "react";
import http from "../../http";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuthenticated, setLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    http
      .post("/auth/login", {
        email,
        senha,
      })
      .then((resposta) => {
        ArmazenadorToken.definirTokens(resposta.data.accessToken);
        setLoading(false);
        navigate("/calendar")
        setIsAuthenticated(true);
      })
      .catch((erro) => {
        setLoading(false);
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
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
