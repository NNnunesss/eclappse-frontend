import Header from "../components/Header";
import Footer from "../components/Footer";

function Sobre() {
    return (
        <>
            <Header />

            <main>
                <h1>Sobre o Eclappse</h1>

                <p style={{ marginTop: "20px", maxWidth: "700px" }}>
                    O Eclappse é um projeto desenvolvido como TCC com o objetivo de
                    auxiliar na divulgação de pessoas desaparecidas, facilitando o acesso
                    à informação e contribuindo com a sociedade.
                </p>
            </main>

            <Footer />
        </>
    );
}

export default Sobre;