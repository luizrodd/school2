import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/AuthContext";

function App() {
  const { authenticated } = useContext(Context);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/calendar"
            element={authenticated ? <Calendar /> : <Navigate to="/" />}
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
