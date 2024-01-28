import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calender.css";
import { useEffect, useState } from "react";
import { ArmazenadorToken } from "../../utils/ArmazenadorTokens";
import http from "../../http";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
const Calendar = () => {
  const { authenticated, handleLogout, loading } = useContext(Context);
  const [usuario, setUsuario] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    http
      .get("/perfil")
      .then((resposta) => {
        setUsuario(resposta.data);
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
