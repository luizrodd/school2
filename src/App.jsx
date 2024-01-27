import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/AuthContext";
import Register from "./pages/Register";

function App() {
  const { authenticated } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/calendar" /> : <Login />}
        />
        <Route
          path="/calendar"
          element={authenticated ? <Calendar /> : <Navigate to="/" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
