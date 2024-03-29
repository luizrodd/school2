import { useState, useEffect } from "react";
import api from "../http/api";

export const useTurmas = () => {
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const response = await api.get("/turmas");
        setTurmas(response.data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTurmas();
  }, [api]); // Add api to the dependency array

  return { turmas, loading, error };
};
