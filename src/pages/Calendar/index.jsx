import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calender.css";
import { useEffect, useState } from "react";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
import http from "../../http";
import api from "../../http";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
const Calendar = () => {
  const { authenticated, handleLogout } = useContext(Context);
  const [usuario, setUsuario] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    http
      .get("/perfil")
      .then((resposta) => {
        setUsuario(resposta.data);

        const eventos = usuario.Horarios.map((horario) => {
          const isMonday = horario.Dia.dia === "Segunda-Feira";
          const isTuesday = horario.Dia.dia === "Terca-Feira";
          const isWednesday = horario.Dia.dia === "Quarta-Feira";
          const isThursday = horario.Dia.dia === "Quinta-Feira";
          const isFriday = horario.Dia.dia === "Sexta-Feira";
          const isSaturday = horario.Dia.dia === "Sábado";
          const isSunday = horario.Dia.dia === "Domingo";

          const daysOfWeek = [
            isMonday && 1,
            isTuesday && 2,
            isWednesday && 3,
            isThursday && 4,
            isFriday && 5,
            isSaturday && 6,
            isSunday && 7,
          ].filter(Boolean);

          return {
            title: `${horario.Disciplina.nome} - ${horario.Series.serie} - ${horario.Turma.turma} - ${horario.Dia.dia} - ${horario.HoraAula.hora} - ${horario.Disciplina.nome}`,
            daysOfWeek,
            startRecur: "2024-01-01",
            endRecur: "2024-12-31",
          };
        });

        setEvents(eventos);
      })
      .catch((erro) => console.error(erro));
  }, []);
  console.log(usuario);
  return (
    <div className="calendario-container">
      <h1>Olá, {usuario.usuario}</h1>
      <button onClick={handleLogout}>Sair</button>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        eventBorderColor="black"
        eventTextColor="white"
      />
    </div>
  );
};

export default Calendar;
