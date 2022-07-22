import '../EditPerfilProfissional/style.css';
import '../Home/style.css';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import Perfil from '../../Assets/login-icon-2.jpg'

function PerfilProfissional() {
    return (
        <>
            <Header />
            <main className="main-profissional">
                <div className="container-perfil-profissional">
                    <a className="content-perfil-profissional" href="#0">
                        <img src={Perfil} alt="Perfil Profissional" />
                        <p>Trocar Foto</p>
                    </a>
                    <div className="nav-perfil-edit">
                        <a href="#0">Meu Perfil</a>
                        <a to="#0">Agenda</a>
                    </div>

                </div>
                <form className="fomr-profissonal" action="#">
                    <div className="container-user">
                        <div className="input-user">
                            <label htmlFor="user">Novo Usuário</label>
                            <span>user</span>
                        </div>
                        <div className="input-user">
                            <label htmlFor="name">Novo Nome</label>
                            <span></span>
                        </div>
                        <div className="input-user">
                            <label htmlFor="email">Novo E-mail</label>
                            <span></span>
                        </div>
                    </div>
                    <div className="input-endereco">
                        <span>Novo Endereço</span>
                        <div className="content-input-endereco">
                            <div className="endereco-input-cep">
                                <label htmlFor="cep">CEP</label>
                                <span></span> 
                            </div>
                            <div className="endereco-input-endereco">
                                <label htmlFor="endereco">Endereço(bairro, rua, N°)</label>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="content-services-atend">
                        <div className="atend-service-atend">
                            <span>Tipo de Atendimento</span>
                            <div className="atendi-input">
                                <div className="atend">
                                    <label htmlFor="domiciliar">Domiciliar</label>
                                    <span></span>
                                </div>
                                <div className="atend">
                                    <label htmlFor="salao">Salão</label>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="atend-service-serviço">
                            <span htmlFor="services">Serviços</span>
                          <span></span>
                        </div>
                        <div className="atend-service-genero">
                            <span htmlFor="sexo">Sexo</span>
                            <span></span>
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit">SALVAR</button>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )
};

export default PerfilProfissional;
