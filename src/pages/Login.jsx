import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
    return (
        <>
            <Header />

            <main>
                <h1>Login</h1>

                <form className="form">
                    <input placeholder="Email" />
                    <input placeholder="Senha" type="password" />

                    <button type="button">Entrar</button>
                </form>
            </main>

            <Footer />
        </>
    );
}

export default Login;