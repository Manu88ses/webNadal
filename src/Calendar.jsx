import React, { useState } from "react";
import "./index.css";

const Calendar = () => {
  const today = new Date().getDate();
  const [openedDays, setOpenedDays] = useState([]);
  const [message, setMessage] = useState(""); 

  const dayContents = {
    1: "Feliz Día 1 🎁",
  2: "Día 2: ¡Sorpresa!",
  3: "Día 3: Chocolate 🍫",
  4: "Día 4: Dulces 🍬",
  5: "Día 5: Una frase divertida 😄",
  6: "Día 6: Regalo sorpresa 🎉",
  7: "Día 7: ¡Feliz Navidad anticipada! 🎄",
  8: "Día 8: Abrazo virtual 🤗",
  9: "Día 9: Dulce navideño 🍭",
  10: "Día 10: Sonríe hoy 😁",
  11: "Día 11: ¡Tiempo de villancicos! 🎶",
  12: "Día 12: Chocolate caliente ☕",
  13: "Día 13: Una tarjeta para ti ✉️",
  14: "Día 14: Confeti y alegría 🎊",
  15: "Día 15: Momento de paz 🕯️",
  16: "Día 16: Una broma navideña 🤪",
  17: "Día 17: Copos de nieve ❄️",
  18: "Día 18: Galletas de jengibre 🍪",
  19: "Día 19: Risas y abrazos 😄",
  20: "Día 20: Una sorpresa dulce 🍫",
  21: "Día 21: Espíritu navideño 🎅",
  22: "Día 22: Música festiva 🎵",
  23: "Día 23: Últimos preparativos 🎁",
  24: "SAHISDHIJSJK"
  };

  const handleOpen = (day) => {
    if (day > today) return; 
    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
      setMessage(dayContents[day] || "¡Sorpresa!");
    } else {
      setMessage(dayContents[day] || "¡Sorpresa!");
    }
  };

  const getButtonContent = (day) => {
    if (day > today) return "🔒";
    return (
      <>
        {day}
        {openedDays.includes(day) && <span className="check">✅</span>}
      </>
    );
  };

  return (
    <div>
      <h1>Calendari d'advent</h1>
      <div className="card">
        {Array.from({ length: 24 }, (_, i) => {
          const day = i + 1;
          return (
            <button key={day} className="dies" onClick={() => handleOpen(day)}>
              {getButtonContent(day)}
            </button>
          );
        })}
      </div>

      
      <div className="message">
        {message ? <p>{message}</p> : (
          <img src="https://static.vecteezy.com/system/resources/thumbnails/035/566/895/small/red-gift-box-and-gold-ribbon-chinese-new-year-elements-icon-3d-rendering-png.png" alt="Regalo"/>
        )}
      </div>
    </div>
  );
};

export default Calendar;
