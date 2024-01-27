const useDisciplinas = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      const response = await api.get("/disciplinas");
      setDisciplinas(response.data);
    };
    fetchDisciplinas();
  }, []);

  return disciplinas;
};
