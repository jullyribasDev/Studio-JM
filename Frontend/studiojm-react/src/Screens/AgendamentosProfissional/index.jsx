import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CardAgendamentProfissional from "../../Components/CardAgendamentProfissional";
import './style.css'

function AgendamentoProfissional() {
    return (
        <>
            <Header />
            <main className="container-agendamentos-profissional">
                <div className="content-text-agendamento">
                    <h1>Meus Agendamentos</h1>
                </div>
                <CardAgendamentProfissional />
            </main>
            <Footer />
        </>
    )
}

export default AgendamentoProfissional;