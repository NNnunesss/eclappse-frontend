import { useParams } from "react-router-dom";

function Detalhes() {

    const { id } = useParams();

    return (
        <main>
            <h1>Detalhes da Pessoa</h1>
            <p>ID: {id}</p>
        </main>
    );
}

export default Detalhes;