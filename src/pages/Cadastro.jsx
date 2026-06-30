import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styles from "../assets/css/Global.module.css";

function Cadastro() {
    return (
        <div className={styles.pageContainer}>
            <Header />

            <main className={styles.authContainer}>
                <div className={styles.authCard}>
                    <h1>Criar Conta no Eclappse</h1>

                    <p className={styles.authSubtitle}>
                        Faça parte da rede de apoio para ajudar a encontrar pessoas desaparecidas.
                    </p>

                    <form className={styles.form}>
                        <div className={styles.formControl}>
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                required
                            />
                        </div>

                        <div className={styles.formControl}>
                            <label>E-mail</label>
                            <input
                                type="email"
                                placeholder="seu-email@provedor.com"
                                required
                            />
                        </div>

                        <div className={styles.formControl}>
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder="Crie uma senha segura"
                                required
                            />
                        </div>

                        <button type="submit" className={styles.btnAuth}>
                            Cadastrar
                        </button>
                    </form>

                    <p className={styles.authFooterText}>
                        Já tem uma conta? <Link to="/login">Faça Login</Link>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Cadastro;