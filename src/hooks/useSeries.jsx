import { useState, useEffect } from "react";
import api from "../http/api";

export const useSeries = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await api.get("/series");
        setSeries(response.data);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, [api]); // Add api to the dependency array

  return { series, loading, error };
};
