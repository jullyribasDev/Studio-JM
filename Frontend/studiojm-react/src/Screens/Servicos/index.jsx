import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import '../Home/style.css'
import './style.css'


function Servico() {
    return (
        <>
            <Header />
            <main className="container-serviceAll">
                <section className="content-services-cabecalho">
                    <span>"Conheça todos os nossos procedimentos"</span>
                    <a className="addService" href="/servicos/addService">+ Adicionar</a>
                </section>

                <section className="content-services-main">
                    <div className="cards-service">
                        <div className="img-card">
                            <img src="/img/massagem.jpg" alt="Serviço Massagem" />
                            <p>Nome do procedimento</p>
                        </div>
                        <div className="text-card">
                            <p>Descrição do procedimento</p>
                            <a href="#0">Agendar</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
};

export default Servico;