import  { createContext, useState, useEffect } from 'react';
import { ArmazenadorToken } from '../utils/ArmazenadorTokens';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null represents the initial loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = ArmazenadorToken.accessToken;
      setIsAuthenticated(!!token); // Update the authentication status based on the presence of a token
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
}