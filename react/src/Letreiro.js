import React, { useRef, useState, useEffect } from 'react';
import './Letreiro.css';

export default function Letreiro({
  text = '🚀 Promoções incríveis chegando!',
  speed = 0.2 // velocidade em pixels por milissegundo
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const [offset, setOffset] = useState(0);

  // Captura larguras no load e resize
  useEffect(() => {
    function updateSizes() {
      if (!containerRef.current || !textRef.current) 
        return;
      setContainerWidth(containerRef.current.clientWidth);
      setTextWidth(textRef.current.clientWidth);
    }
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, [text]);

  // Inicializa offset para começar fora à direita
  useEffect(() => {
    setOffset(containerWidth);
  }, [containerWidth, text]);

  // requestAnimationFrame para mover o texto com gap igual à largura da tela
  useEffect(() => {
    let frameId;
    let lastTime;

    function step(now) {
      if (lastTime != null) {
        const delta = now - lastTime;
        setOffset(prev => {
          const next = prev - speed * delta;
          // gap igual à largura do container
          if (next < -textWidth + containerWidth + 4) {
            return containerWidth;
          }
          return next;
        });
      }
      lastTime = now;
      frameId = requestAnimationFrame(step);
    }

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [containerWidth, textWidth, speed]);

  return (
    <div ref={containerRef} className="letreiro-container">
      <div
        ref={textRef}
        className="letreiro-text"
        style={{ transform: `translateX(${offset}px)` }}
      >
        {text}
      </div>
    </div>
  );
}