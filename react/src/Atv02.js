import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from './Contador';
import Total from './Total';
import './Atv02.css';

export default function Atv02() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const reset = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="container">
      <Total total={homens + mulheres} onReset={reset} />
      <div className="contadores">
        <Contador
          tipo="Homens"
          valor={homens}
          setValor={setHomens}
          imagem="https://cdn-icons-png.flaticon.com/512/194/194935.png"
        />
        <Contador
          tipo="Mulheres"
          valor={mulheres}
          setValor={setMulheres}
          imagem="https://cdn-icons-png.flaticon.com/512/194/194938.png"
        />
      </div>
      <Link to='/' className="botao-voltar">Voltar</Link>
    </div>
  );
}