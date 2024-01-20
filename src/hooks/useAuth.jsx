import { useState, useEffect } from 'react';
import { ArmazenadorToken } from '../utils/ArmazenadorTokens';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = ArmazenadorToken.accessToken;
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated, setIsAuthenticated, loading, setLoading };
};

export default useAuth;