function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}


export default function Toolbar()
{
    return (
        <div className="toolbar" onClick={() => {
            alert('Você Clicou na ToolBar!');
        }}>
            <Button onClick={()=>alert('Transmitindo')}>
                Assistir Filme
            </Button>
            <Button onClick={()=>alert('Postando')}>
                Postar Imagem
            </Button>
        </div>
    );
}