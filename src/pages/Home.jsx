import { useEffect, useState } from "react";
import api from "../services/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styles from "../assets/css/Home.module.css";

function Home() {
    const [pessoas, setPessoas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const res = await api.get("/pessoas");
                setPessoas(res.data);
            } catch (err) {
                console.log("API ainda não conectada, usando mock");

                setPessoas([
                    {
                        id: 1,
                        nome: "João Silva",
                        cidade: "São Paulo - SP",
                        idade: 34,
                        dataDesaparecimento: "15/04/2026",
                        descricao:
                            "Visto pela última vez usando camiseta azul, calça jeans e mochila preta. A família busca qualquer informação que possa ajudar na sua localização.",
                        foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
                    },
                    {
                        id: 2,
                        nome: "Maria Souza",
                        cidade: "Barueri - SP",
                        idade: 28,
                        dataDesaparecimento: "02/05/2026",
                        descricao:
                            "Foi vista pela última vez próximo ao centro de Barueri. Vestia blusa branca e calça preta.",
                        foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
                    },
                ]);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <Header />

            <main className={styles.container}>
                {/* HERO */}
                <section className={styles.hero}>
                    <h1>Encontre Pessoas Desaparecidas</h1>

                    <p>
                        Uma plataforma dedicada a conectar famílias e trazer
                        esperança de volta para casa.
                    </p>

                    <Link to="/login" className={styles.btnHero}>
                        Como Ajudar?
                    </Link>
                </section>

                {/* LISTA DE CASOS */}
                <section className={styles.cardsSection}>
                    <h2>Casos Recentes</h2>

                    {loading ? (
                        <div className={styles.loading}>
                            Carregando informações...
                        </div>
                    ) : (
                        <div className={styles.grid}>
                            {pessoas.map((pessoa) => (
                                <div
                                    key={pessoa.id}
                                    className={styles.card}
                                >
                                    <div className={styles.badge}>
                                        DESAPARECIDO
                                    </div>

                                    <div className={styles.cardImgContainer}>
                                        <img
                                            src={
                                                pessoa.foto ||
                                                "https://via.placeholder.com/300x300?text=Sem+Foto"
                                            }
                                            alt={pessoa.nome}
                                            className={styles.cardImg}
                                        />
                                    </div>

                                    <div className={styles.cardContent}>
                                        <h3>{pessoa.nome}</h3>

                                        <div className={styles.info}>
                                            <p>
                                                🎂 <strong>{pessoa.idade} anos</strong>
                                            </p>

                                            <p>
                                                📍 {pessoa.cidade}
                                            </p>

                                            <p>
                                                📅 {pessoa.dataDesaparecimento}
                                            </p>
                                        </div>

                                        <p className={styles.description}>
                                            {pessoa.descricao}
                                        </p>
                                        <Link to="/login" className={styles.btnCard}>
                                            Tenho Informações
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;