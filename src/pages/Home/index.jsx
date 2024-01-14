import { useEffect, useState } from "react";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
import http from "../../http";

const Home = () => {
  const [usuario, setUsuario] = useState(null);
  console.log(usuario);

  useEffect(() => {
    http
      .get("/perfil", {
        headers: {
          Authorization: `${ArmazenadorToken.accessToken}`,
        },
      })
      .then((resposta) => setUsuario(resposta.data))
      .catch((erro) => console.error(erro));
  }, [ArmazenadorToken.accessToken]);

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
