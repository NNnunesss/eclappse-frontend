import { useEffect, useState } from "react";
import api from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const res = await api.get("/pessoas"); // endpoint futuro do Spring
                setPessoas(res.data);
            } catch (err) {
                console.log("API ainda não conectada, usando mock");

                setPessoas([
                    { id: 1, nome: "João Silva", cidade: "SP" },
                    { id: 2, nome: "Maria Souza", cidade: "Barueri" }
                ]);
            }
        }

        load();
    }, []);

    return (
        <>
            <Header />

            <main>
                <h1>Pessoas Desaparecidas</h1>

                <div className="grid">
                    {pessoas.map(p => (
                        <div key={p.id} className="card">
                            <h3>{p.nome}</h3>
                            <p>{p.cidade}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Home;