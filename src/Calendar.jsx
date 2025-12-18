import React, { useState } from "react";
import "./index.css";

const Calendar = () => {
  const today = new Date().getDate(); // día actual
  const [openedDays, setOpenedDays] = useState([]);


  const handleOpen = (day) => {
    if (day > today) return; // bloquear días futuros
    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
    }
  };

  // Función que devuelve el contenido del botón
  const getButtonContent = (day) => {
    if (day > today) return "🔒"; // días futuros
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
        <button className="dies" onClick={() => handleOpen(1)}>{getButtonContent(1)}</button>
        <button className="dies" onClick={() => handleOpen(2)}>{getButtonContent(2)}</button>
        <button className="dies" onClick={() => handleOpen(3)}>{getButtonContent(3)}</button>
        <button className="dies" onClick={() => handleOpen(4)}>{getButtonContent(4)}</button>
        <button className="dies" onClick={() => handleOpen(5)}>{getButtonContent(5)}</button>
        <button className="dies" onClick={() => handleOpen(6)}>{getButtonContent(6)}</button>
        <button className="dies" onClick={() => handleOpen(7)}>{getButtonContent(7)}</button>
        <button className="dies" onClick={() => handleOpen(8)}>{getButtonContent(8)}</button>
        <button className="dies" onClick={() => handleOpen(9)}>{getButtonContent(9)}</button>
        <button className="dies" onClick={() => handleOpen(10)}>{getButtonContent(10)}</button>
        <button className="dies" onClick={() => handleOpen(11)}>{getButtonContent(11)}</button>
        <button className="dies" onClick={() => handleOpen(12)}>{getButtonContent(12)}</button>
        <button className="dies" onClick={() => handleOpen(13)}>{getButtonContent(13)}</button>
        <button className="dies" onClick={() => handleOpen(14)}>{getButtonContent(14)}</button>
        <button className="dies" onClick={() => handleOpen(15)}>{getButtonContent(15)}</button>
        <button className="dies" onClick={() => handleOpen(16)}>{getButtonContent(16)}</button>
        <button className="dies" onClick={() => handleOpen(17)}>{getButtonContent(17)}</button>
        <button className="dies" onClick={() => handleOpen(18)}>{getButtonContent(18)}</button>
        <button className="dies" onClick={() => handleOpen(19)}>{getButtonContent(19)}</button>
        <button className="dies" onClick={() => handleOpen(20)}>{getButtonContent(20)}</button>
        <button className="dies" onClick={() => handleOpen(21)}>{getButtonContent(21)}</button>
        <button className="dies" onClick={() => handleOpen(22)}>{getButtonContent(22)}</button>
        <button className="dies" onClick={() => handleOpen(23)}>{getButtonContent(23)}</button>
        <button className="dies" onClick={() => handleOpen(24)}>{getButtonContent(24)}</button>
      </div>
      
      <img src="https://static.vecteezy.com/system/resources/thumbnails/035/566/895/small/red-gift-box-and-gold-ribbon-chinese-new-year-elements-icon-3d-rendering-png.png"></img>
    </div>
  );
};

export default Calendar;
