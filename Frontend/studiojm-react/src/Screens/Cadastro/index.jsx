import { Link } from "react-router-dom";
import './style.css'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Fundo from '../../Assets/salao.jpg'

function Cadastro() {
    return (
        <>
            <Header />
            <div className="main-container">
                <img src={Fundo} alt="Fundo Cadastro" />
                <div className="card-form">
                    <h1>Escolha uma das opções</h1>
                    <div className="register-form">
                        <Link className="btn-link" to="/cadastroCLiente">Cliente</Link>
                        <Link className="btn-link" to="/cadastroProfissional">Profissional</Link>
                        <h2>Tem uma conta? <Link className="login-cadastro" to="/login">Entre</Link></h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};


export default Cadastro;