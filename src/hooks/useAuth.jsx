import { useEffect, useState } from "react";
import { ArmazenadorToken } from "../utils/ArmazenadorTokens";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = ArmazenadorToken.accessToken;

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token, isAuthenticated]);

  return { isAuthenticated, setIsAuthenticated, loading, setLoading };
};

export default useAuth;
