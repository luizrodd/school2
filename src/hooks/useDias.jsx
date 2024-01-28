import { useState, useEffect } from "react";
import api from "../http/api";

export const useDias = () => {
  const [dias, setDias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDias = async () => {
      try {
        const response = await api.get("/dias");
        setDias(response.data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDias();
  }, [api]); // Add api to the dependency array

  return { dias, loading, error };
};
