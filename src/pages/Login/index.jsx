import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../http";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const {  setIsAuthenticated,  setLoading } = useAuth();
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
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((erro) => console.error(erro));
    navigate("/calendar");
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
    </div>
  );
};

export default Login;
