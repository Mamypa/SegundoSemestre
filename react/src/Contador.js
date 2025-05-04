import React from 'react';
import './Contador.css';

export default function Contador({ tipo, valor, setValor, imagem }) {
  return (
    <div className="contador">
      <img src={imagem} alt={tipo} className="imagem" />
      <div>
        <button onClick={() => setValor(valor + 1)} className="btn">➕</button>
        <button onClick={() => setValor(valor > 0 ? valor - 1 : 0)} className="btn">➖</button>
      </div>
      <div className="label">{tipo}</div>
      <div className="numero">{valor}</div>
    </div>
  );
}