import Toolbar from "./Toolbar";
import Exposicao from "./exposicao";
import Counter from "./CounterSL11";
import Form from "./FormSL11";
import MovingDot from "./MovingDot";
import "./Atv04.css";
import {Link} from "react-router-dom";


export default function Atv04()
{
    return (
        <>
        <div className="atv04">
            <Toolbar/>
            <Exposicao/>
            <Counter/>
            <Form/>
            <MovingDot/>
        </div>
        <Link to='/' className='botao-voltar'>Voltar</Link>
        </>
    );
}