const person = {
    name: "Mouse",
    theme :{
        backgroundColor: "black",
        color: "pink",
        avatar: {
            width: "300px",
            height: "300px",
            borderRadius: "50%"
        },
        ul: {
            listStyleType: "none",
            padding: 0,
            listStylePosition: "inside",
        },
    }
}

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>Lista de Tarefas do {person.name}</h1>
            <img style={person.theme.avatar} src="https://i.imgur.com/NhSLQP7.png" alt="Mouse" />
            <ul style={person.theme.ul}>
                <li>COMER</li>
                <li>DORMIR</li>
                <li>DORMIR</li>
                <li>ASSISTIR HUMANO</li>
            </ul>
        </div>
    );
}

