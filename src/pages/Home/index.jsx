import { useEffect, useState } from "react";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";

const Home = () => {
  const [usuario, setUsuario] = useState(null);



  return (
    <div>
      {usuario ? (
        <>
          <h1>Informações do Usuário</h1>
          <p>ID: {usuario.id}</p>
          <p>Usuário: {usuario.usuario}</p>
          <p>Email: {usuario.email}</p>

          <h2>Horários</h2>
          {usuario.Horarios.map((horario, index) => (
            <div key={index}>
              <p>Disciplina: {horario.Disciplina.nome}</p>
              <p>Dia: {horario.Dia.dia}</p>
              <p>Hora: {horario.HoraAula.hora}</p>
              <p>Série: {horario.Series.serie}</p>
              <p>Turma: {horario.Turma.turma}</p>
              <hr />
            </div>
          ))}
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;
