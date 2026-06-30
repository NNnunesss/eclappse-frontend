import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Detalhes() {
    const { id } = useParams();
    const [pessoa, setPessoa] = useState(null);

    useEffect(() => {
        // Simulando a busca pelos detalhes da pessoa via ID
        setPessoa({
            id: id,
            nome: "João Silva",
            idade: 34,
            cidade: "São Paulo - SP",
            ultimaVezVisto: "Praça da Sé, próximo ao metrô",
            dataDesaparecimento: "12/05/2026",
            descricao: "Possui uma cicatriz no braço esquerdo. Estava vestindo calça jeans azul e jaqueta preta.",
            foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
        });
    }, [id]);

    if (!pessoa) return <div className="loading">Carregando detalhes...</div>;

    return (
        <div className="page-container">
            <Header />
            <main className="container">
                <Link to="/" className="btn-voltar">← Voltar para a Início</Link>
                
                <div className="detalhes-wrapper">
                    <div className="detalhes-foto">
                        <img src={pessoa.foto} alt={`Foto de ${pessoa.nome}`} />
                    </div>
                    
                    <div className="detalhes-info">
                        <h1>{pessoa.nome}</h1>
                        <span className="badge-urgente">Desaparecido</span>
                        
                        <div className="info-grupo">
                            <p><strong>Idade:</strong> {pessoa.idade} anos</p>
                            <p><strong>Cidade/Estado:</strong> {pessoa.cidade}</p>
                            <p><strong>Visto por último em:</strong> {pessoa.ultimaVezVisto}</p>
                            <p><strong>Data do Desaparecimento:</strong> {pessoa.dataDesaparecimento}</p>
                        </div>

                        <div className="info-descricao">
                            <h3>Características e Descrição</h3>
                            <p>{pessoa.descricao}</p>
                        </div>

                        <button className="btn-comunicar">
                            ⚠ Tenho Informações sobre este caso
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Detalhes;