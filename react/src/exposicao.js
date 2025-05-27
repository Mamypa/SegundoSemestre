import { useState } from "react";
import { sculptureList } from "data.js";

export default function Exposicao() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(0);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculputure = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Proximo
            </button>
            <h2>
                <i>{sculputure.name}</i>
                marca:{sculputure.marca}
                fabricante:{sculptureList.fabricante}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.lenght})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} Details
            </button>
            {showMore && <p>{sculptureList.descricao}</p>}
            <img
                src={sculputure.url}
                alt={sculptureList.alt}
            />
        </>
    );
}