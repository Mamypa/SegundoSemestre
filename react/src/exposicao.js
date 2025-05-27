import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Exposicao() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index];
    return (
        <>
            <h2>
                <i>{sculpture.name}<br/></i>
                <i>{sculpture.marca}<br/></i>
                <i>{sculpture.fabricante}</i>
            </h2>
            <button onClick={handleNextClick}>
                Proximo
            </button>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} Details
            </button>
            {showMore && <p>{sculpture.descricao}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
                width={500}
                height={500}
            />
        </>
    );
}