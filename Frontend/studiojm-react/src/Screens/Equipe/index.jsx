import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Fundo from '../../Assets/equipe-img-header.jpg'
import CardProfissional from "../../Components/CardProfissional";
import './style.css'

function Profissionais() {
    return (
        <>
            <Header />
            <div className="container-profissionais">
                <div className="container-fundo">
                    <img src={Fundo} alt="Fundo Profissionais" />
                    <span>Profissionais</span>
                </div>
                <CardProfissional />
            </div>
            <Footer />
        </>
    )
};

export default Profissionais;