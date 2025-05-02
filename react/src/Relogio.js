import React, { useState, useEffect } from 'react';
import "./Relogio.css"; // Importando o CSS para estilização

export default function Clock({ format24 = true }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      let ampm = '';

      if (!format24) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
      }

      const hh = String(hours).padStart(2, '0');
      const mm = String(minutes).padStart(2, '0');
      const ss = String(seconds).padStart(2, '0');

      setTime(`${hh}:${mm}:${ss}${ampm}`);
    }

    // Atualiza imediatamente e depois a cada segundo
    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, [format24]);

  return (
    <div className="Relogio">
      {time}
    </div>
  );
}