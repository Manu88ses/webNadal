import React, { useState } from "react";
import days from "/days.json"; // si lo tienes en un archivo externo
import "./index.css";

const Calendar = () => {
  const today = new Date().getDate();
  const [openedDays, setOpenedDays] = useState([]);
  const [message, setMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (day) => {
    if (day > today) return;

    const content = days[day - 1]; // ← IMPORTANT: arrays empiezan en 0

    if (!openedDays.includes(day)) {
      setOpenedDays([...openedDays, day]);
    }

    setMessage(content);
    setIsModalOpen(true);  // Abrimos el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Cerramos el modal
    setMessage(null);  // Limpiamos el mensaje cuando se cierra
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

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>❌</button>
            {message ? (
              <div>
                <h2>{message.title}</h2>
                <img src={message.url} alt={message.title} />
              </div>
            ) : (
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/035/566/895/small/red-gift-box-and-gold-ribbon-chinese-new-year-elements-icon-3d-rendering-png.png"
                alt="Regalo"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Calendar;
