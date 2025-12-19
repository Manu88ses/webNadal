import React, { useState } from "react";
import "./index.css";

const Calendar = () => {
  const today = new Date().getDate();
  const [openedDays, setOpenedDays] = useState([]);
  const [message, setMessage] = useState(""); 

  const dayContents = {
1: "Feliç Dia 1 🎁",
2: "Dia 2: Sorpresa!",
3: "Dia 3: Xocolata 🍫",
4: "Dia 4: Dolços 🍬",
5: "Dia 5: Una frase divertida 😄",
6: "Dia 6: Regal sorpresa 🎉",
7: "Dia 7: Bon Nadal anticipat! 🎄",
8: "Dia 8: Abraçada virtual 🤗",
9: "Dia 9: Dolç de Nadal 🍭",
10: "Dia 10: Somriu avui 😁",
11: "Dia 11: Temps de nadales! 🎶",
12: "Dia 12: Xocolata calenta ☕",
13: "Dia 13: Una targeta per a tu ✉️",
14: "Dia 14: Confeti i alegria 🎊",
15: "Dia 15: Moment de pau 🕯️",
16: "Dia 16: Una broma nadalenca 🤪",
17: "Dia 17: Flocs de neu ❄️",
18: "Dia 18: Galetes de gingebre 🍪",
19: "Dia 19: Riures i abraçades 😄",
20: "Dia 20: Una sorpresa dolça 🍫",
21: "Dia 21: Esperit de Nadal 🎅",
22: "Dia 22: Música festiva 🎵",
23: "Dia 23: Últims preparatius 🎁",
24: "Bon nadal!!"
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
