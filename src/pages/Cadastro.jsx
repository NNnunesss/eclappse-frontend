import Header from "../components/Header";
import Footer from "../components/Footer";

function Cadastro() {
    return (
        <>
            <Header />

            <main>
                <h1>Cadastro</h1>

                <form className="form">
                    <input placeholder="Nome" />
                    <input placeholder="Email" />
                    <input placeholder="Senha" type="password" />

                    <button type="button">Cadastrar</button>
                </form>
            </main>

            <Footer />
        </>
    );
}

export default Cadastro;