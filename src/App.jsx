import { Routes, Route, BrowserRouter } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";

function App() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    console.log("is:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/calendar"
          element={isAuthenticated ? <Calendar /> : <Navigate to="/" />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
