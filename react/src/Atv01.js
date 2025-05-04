import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Letreiro from './Letreiro';
import Relogio from './Relogio';
import './Atv01.css';

export default function Atv01() {
    const [timeZone, setTimeZone] = useState('');
    const [utcOffset, setUtcOffset] = useState('');

    useEffect(() => {
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const offsetMin = new Date().getTimezoneOffset(); // ex: -180
        const offsetHoras = -offsetMin / 60; // -180 → 3
        const offsetFormatado = `UTC${offsetHoras >= 0 ? '+' : ''}${offsetHoras}`;
        setUtcOffset(offsetFormatado);
        setTimeZone(userTimeZone);
    }, []);
    return (
        <div className="container">
            <Letreiro text={`🕒 Relógio Digital | 🌍 Timezone: ${timeZone} (${utcOffset})`}/>
            <Relogio />
            <div className="botao-voltar-container">
                <Link to='/' className="botao-voltar">Voltar</Link>
            </div>
        </div>
    );
}
