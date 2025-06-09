import { useState } from "react";
import { sculptureList } from "./data.js";
import './exposicao.css';  // Importe o arquivo CSS

export default function Exposicao() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleBackClick() {
        setIndex(index - 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
        <div className="exposicao">
            <h2>
                <i>{sculpture.name}<br /></i>
                <i>{sculpture.marca}<br /></i>
                <i>{sculpture.fabricante}</i>
            </h2>
            <div className="botoes">
            <button onClick={handleBackClick}>
                Voltar
            </button>
            <button onClick={handleNextClick}>
                Próximo
            </button>
            </div>
            <h3>
                ({index + 1} de {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Esconder' : 'Mostrar'} Detalhes
            </button>
            {showMore && <p>{sculpture.descricao}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </div>
    );
}
