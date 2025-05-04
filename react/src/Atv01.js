import { Link } from 'react-router-dom';
import Letreiro from './Letreiro';
import Relogio from './Relogio';
import './Atv01.css';

export default function Atv01() {
    return (
        <div className="container">
            <Letreiro text="Relógio Digital" duration={5} />
            <Relogio />
            <div className="botao-voltar-container">
                <Link to='/' className="botao-voltar">Voltar</Link>
            </div>
        </div>
    );
}
