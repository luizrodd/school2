import { useState, useEffect } from "react";
import api from "../http/api";

export const useDisciplinas = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await api.get("/disciplinas");
        setDisciplinas(response.data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDisciplinas();
  }, [api]); // Add api to the dependency array

  return { disciplinas, loading, error };
};
