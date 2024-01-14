import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import { ArmazenadorToken } from "./utils/ArmazenadorTokens";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = ArmazenadorToken.accessToken;
    setUser(!!token); // Define o estado do usuário com base na existência do token
  }, []);

  return (
    <SessaoUsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/calendar" element={user ? <Calendar /> : <Login/>} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SessaoUsuarioProvider>
  );
}

export default App;
