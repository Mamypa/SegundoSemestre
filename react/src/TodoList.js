const person = {
    name: "Mouse",
    theme :{
        backgroundColor: "black",
        color: "pink",
        avatar: {
            width: "100px",
            height: "100px",
            borderRadius: "50%"
        }
    }
}

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>Lista de Tarefas do {person.name}</h1>
            <img style={person.theme.avatar} src="https://i.imgur.com/NhSLQP7.png" alt="Mouse" />
            <ul>
                <li>DORMIR</li>
                <li>DORMIR</li>
                <li>ASSISTIR HUMANO</li>
            </ul>
        </div>
    );
}

