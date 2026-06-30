import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import styles from "../assets/css/Global.module.css";

function Login() {
    return (
        <div className={styles.pageContainer}>
            <Header />

            <main className={styles.authContainer}>
                <div className={styles.authCard}>
                    <h1>Entrar no Eclappse</h1>

                    <p className={styles.authSubtitle}>
                        Acesse sua conta para gerenciar buscas ou enviar relatos.
                    </p>

                    <form className={styles.form}>
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
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>

                        <button type="submit" className={styles.btnAuth}>
                            Entrar
                        </button>
                    </form>

                    <p className={styles.authFooterText}>
                        Não tem uma conta?{" "}
                        <Link to="/cadastro">Cadastre-se aqui</Link>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Login;