import {Link} from "react-router-dom";
import Gallery from "./Gallery";


export default function Atv03() {
    return ( 
        <>
            <h1>Atividade 03</h1>
            <div>
                <Gallery />
            </div>
            <Link to='/' className="botao-voltar">Voltar</Link>
        </>
    )


}