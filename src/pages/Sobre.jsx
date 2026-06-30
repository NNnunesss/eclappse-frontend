import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../assets/css/Sobre.module.css";

function Sobre() {
    return (
        <div className="page-container">
            <Header />

            <main className={`container ${styles.contentSobre}`}>
                <div className={styles.sobreHeader}>
                    <h1>Sobre o Eclappse</h1>
                    <div className={styles.linhaDecorativa}></div>
                </div>

                <div className={styles.sobreCorpo}>
                    <p>
                        O <strong>Eclappse</strong> é um projeto tecnológico humanitário
                        desenvolvido como Trabalho de Conclusão de Curso (TCC). Nosso
                        principal objetivo é centralizar, otimizar e expandir a divulgação
                        de informações sobre pessoas desaparecidas.
                    </p>

                    <p>
                        Acreditamos que a tecnologia associada à união comunitária é uma
                        ferramenta poderosa capaz de diminuir distâncias e apoiar famílias
                        em momentos de extrema vulnerabilidade. Através de um cruzamento
                        inteligente de dados e facilidade de compartilhamento, oferecemos
                        esperança e um canal direto de ajuda.
                    </p>

                    <div className={styles.valoresGrid}>
                        <div className={styles.valorCard}>
                            <h3>Confiança</h3>
                            <p>
                                Segurança na validação de informações e respeito à
                                privacidade das famílias.
                            </p>
                        </div>

                        <div className={styles.valorCard}>
                            <h3>Esperança</h3>
                            <p>
                                Trabalhar incansavelmente para reatar laços e trazer
                                respostas.
                            </p>
                        </div>

                        <div className={styles.valorCard}>
                            <h3>União</h3>
                            <p>
                                Fortalecer a rede de apoio comunitária em prol do
                                bem-estar social.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Sobre;