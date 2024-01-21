import { useEffect, useState } from "react";
import { ArmazenadorToken } from "../utils/ArmazenadorTokens";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = ArmazenadorToken.accessToken;

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token, isAuthenticated]);

  return { isAuthenticated, setIsAuthenticated};
};

export default useAuth;
