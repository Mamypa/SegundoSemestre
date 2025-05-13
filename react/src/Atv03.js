import {Link} from "react-router-dom";
import Gallery from "./Gallery";
import TodoList from "./TodoList";
import Profile from "./Profile";

const styleDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px"
}
export default function Atv03() {
    return ( 
        <>
            <h1>Atividade 03</h1>
            <div style={styleDiv}>
                <Gallery />
                <TodoList />
                <Profile />
            </div>
            <Link to='/' className="botao-voltar">Voltar</Link>
        </>
    )


}