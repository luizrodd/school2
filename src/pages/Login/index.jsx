import styles from "./Login.module.css";
import React, { useState } from "react";
import { useSessaoUsuarioContext } from "../../contexto/SessaoUsuario";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useSessaoUsuarioContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, senha);
    navigate("/calendar")
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
