import { useState, useEffect } from "react";
import api from "../http/api";

export const useHoraAulas = () => {
  const [horaAulas, setHoraAulas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoraAulas = async () => {
      try {
        const response = await api.get("/horaAulas");
        setHoraAulas(response.data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoraAulas();
  }, [api]); // Add api to the dependency array

  return { horaAulas, loading, error };
};
