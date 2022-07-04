import './style.css';
import '../Home/style.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import Perfil from '../../Assets/login-icon-2.jpg'

function Profissional() {
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
                    </div>

                </div>
                <form className="fomr-profissonal" action="#">
                    <div className="container-user">
                        <div className="input-user">
                            <label htmlFor="user">Novo Usuário</label>
                            <input type="text" name="user" id="user" />
                        </div>
                        <div className="input-user">
                            <label htmlFor="name">Novo Nome</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="input-user">
                            <label htmlFor="email">Novo E-mail</label>
                            <input type="text" name="name" id="email" />
                        </div>
                    </div>
                    <div className="input-endereco">
                        <span>Novo Endereço</span>
                        <div className="content-input-endereco">
                            <div className="endereco-input-cep">
                                <label htmlFor="cep">CEP</label>
                                <input className="cep" type="number" name="cep" id="cep" />
                            </div>
                            <div className="endereco-input-endereco">
                                <label htmlFor="endereco">Endereço(bairro, rua, N°)</label>
                                <input className="endereco" type="text" name="endereco" id="endereco" />
                            </div>
                        </div>
                    </div>
                    <div className="content-services-atend">
                        <div className="atend-service-atend">
                            <span>Tipo de Atendimento</span>
                            <div className="atendi-input">
                                <div className="atend">
                                    <label htmlFor="domiciliar">Domiciliar</label>
                                    <input type="radio" name="atendimento" id="domiciliar" />
                                </div>
                                <div className="atend">
                                    <label htmlFor="salao">Salão</label>
                                    <input type="radio" name="atendimento" id="salao" />
                                </div>
                            </div>
                        </div>
                        <div className="atend-service-serviço">
                            <span htmlFor="services">Adicionar Serviços</span>
                            <select defaultValue={'DEFAULT'} name="servicos" id="services">
                                <option value={"DEFAULT"} disabled>Selecione</option>
                                <option value="manicure">Manicure</option>
                                <option value="massagem">Massagem</option>
                                <option value="pedicure">Pedicure</option>
                                <option value="maquiagem">Maquiagem</option>
                                <option value="limpeza">Limpeza de Pele</option>
                                <option value="corte">Corte de Cabelo</option>
                            </select>
                        </div>
                        <div className="atend-service-genero">
                            <span htmlFor="sexo">Sexo</span>
                            <select defaultValue={'DEFAULT'} name="genero" id="sexo">
                                <option value={"DEFAULT"} disabled>Selecione</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </div>

                    <div className="content-procedimentos">
                        <span>Adicionar fotos de Procedimetos</span>
                        <div className="fotos-procedimentos">
                            <img src={Perfil} alt="fotos procedimentos" />
                            <label htmlFor="fotos">Adicionar Fotos</label>
                            <input type="file" name="fotos" id="fotos" multiple />
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

export default Profissional;