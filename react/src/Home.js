import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

    return (
        <div>
            <nav>
                <h1>Depositório de Atividades</h1>
                <ul className='link-list'>
                    <li>
                        <Link to='/Atv01'>Atividade 1</Link>
                    </li>
                    <li>
                        <Link to='/Atv02'>Atividade 2</Link>
                    </li>
                    <li>
                        <Link to='/Atv03'>Atividade 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Home;