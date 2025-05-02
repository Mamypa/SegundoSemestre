import Relogio from './Relogio';
import Letreiro from './Letreiro';
import {Link} from "react-router-dom";

export default function Atv01() {
    return (
        <>
            <Letreiro text="Relógio Digital" duration={5} />
            <Relogio />
            <Link to='/'>Voltar</Link>
        </>
    );
}
