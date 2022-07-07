
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import '../Home/style.css'
import './style.css'
import CardServico from "../../Components/Servicos";

function Servico() {
    return (
        <>
            <Header />
            <main className="container-serviceAll">
                <section className="content-services-cabecalho">
                    <span>"Conheça todos os nossos procedimentos"</span>
                    <Link className="addService" to="/servicos/addService">+ Adicionar</Link>
                </section>
                <section className="content-services-main">
                    <CardServico />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default Servico;
