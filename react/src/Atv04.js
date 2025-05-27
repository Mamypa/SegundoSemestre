import Toolbar from "./Toolbar";
import {Link} from "react-router-dom";


export default function Atv04()
{
    return (
        <>
        <div className="atv04">
            <Toolbar/>
        </div>
        <Link to='/' className='botao-voltar'>Voltar</Link>
        </>
    );
}