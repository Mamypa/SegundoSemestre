import React, { useState, useEffect } from 'react';

export default function Letreiro() {
  const [position, setPosition] = useState(100); // Posição inicial (fora da tela à direita)
  const text = "Meu Letreiro"; // Texto a ser exibido

  useEffect(() => {
    const moveText = setInterval(() => {
      setPosition(prevPosition => {
        // Se o texto saiu completamente da tela, reiniciamos a posição
        if (prevPosition < -100) {
          return 100;
        }
        // Move o texto para a esquerda
        return prevPosition - 1;
      });
    }, 10); // A cada 10ms, o texto se move 1 pixel

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(moveText);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={{ ...styles.text, left: `${position}%` }}>
        {text}
      </h2>
    </div>
  );
}

const styles = {
  container: {
    width: '100%', 
    overflow: 'hidden', // Impede que o conteúdo ultrapasse os limites
    backgroundColor: 'black', 
    padding: '10px 0', // Pequeno espaçamento superior e inferior
  },
  text: {
    position: 'absolute', 
    whiteSpace: 'nowrap', 
    color: 'white', 
    fontSize: '24px',
  },
};
