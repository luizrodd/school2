import styles from "./Login.module.css";
import { useState } from "react";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { authenticated, handleLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  console.log("authenticated", authenticated);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, senha)
      .then(() => {
        navigate("/calendar");
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
    </div>
  );
};

export default Login;
