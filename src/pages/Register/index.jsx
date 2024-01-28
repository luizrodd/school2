import { useEffect } from "react";
import { useState } from "react";
import api from "../../http/api";
import { useDisciplinas } from "../../hooks/useDisciplinas";
import { useTurmas } from "../../hooks/useTurmas";
import { useSeries } from "../../hooks/useSeries";
import { useDias } from "../../hooks/useDias";
import { useHoraAulas } from "../../hooks/useHoraAulas";

const Register = () => {
  const { disciplinas } = useDisciplinas();
  const { turmas } = useTurmas()
  const { series } = useSeries()
  const { dias } = useDias()
  const { horaAulas } = useHoraAulas()

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [turma, setTurma] = useState("");
  const [serie, setSerie] = useState("");
  const [horaAula, setHoraAula] = useState("");
  const [dia, setDia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Nome do Usuario:</label>
        <input type="text" onChange={(e) => setUsuario(e.target.value)} />
        <label htmlFor="">Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">Senha:</label>
        <input type="password" onChange={(e) => setSenha(e.target.value)} />
        <select>
          <option value="">Selecione uma disciplina</option>
          {disciplinas.map((disciplina) => (
            <option
              key={disciplina.id}
              value={disciplina.id}
            >
              {disciplina.nome}
            </option>
          ))}
        </select>
        <select>
          <option value="">Selecione uma turma</option>
          {turmas.map((turma) => (
            <option value={turma.id}>{turma.nome}</option>
          ))}
        </select>
        <select>
          <option value="">Selecione uma serie</option>
          {series.map((serie) => (
            <option value={serie.id}>{serie.nome}</option>
          ))}
        </select>
        <select>
          <option value="">Selecione uma hora aula</option>
          {horaAulas.map((horaAula) => (
            <option value={horaAula.id}>{horaAula.nome}</option>
          ))}
        </select>
        <select>
          <option value="">Selecione um dia</option>
          {dias.map((dia) => (
            <option value={dia.id}>{dia.nome}</option>
          ))}
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
