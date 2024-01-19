import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SessaoUsuarioProvider } from "./contexto/SessaoUsuario";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import { AuthProvider } from "./contexto/AuthProvider";

function App() {
  useEffect(() => {}, []);

  return (
    <SessaoUsuarioProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SessaoUsuarioProvider>
  );
}

export default App;
