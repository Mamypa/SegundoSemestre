import "./Gallery.css";

function Profile(){
    return (
        <div className="profile-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Katherine_Johnson_at_NASA%2C_in_1966.jpg" alt="Profile" />
            <h2>Katherine Jhonson</h2>
            <p>Katherine Johnson, NASA employée, mathematician and physicist, in 1966</p>
        </div>
    );
}

export default function Gallery() {
    return (
        <div className="gallery-container">
            <h1>Galeria de Imagens</h1>
            <div className="gallery-grid">
                <Profile />
                <Profile />
            </div>
        </div>
    );
}