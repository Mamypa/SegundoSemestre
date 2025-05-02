import React from 'react';

export default function Letreiro({
    text = 'Bem-vindo ao meu site! 🚀',
    duration = 10 
  }) {
    return (
      <div
        className="letreiro-container"
        style={{ '--marquee-duration': `${duration}s` }}
      >
        <span className="letreiro-text">{text}</span>
      </div>
    );
  }
  