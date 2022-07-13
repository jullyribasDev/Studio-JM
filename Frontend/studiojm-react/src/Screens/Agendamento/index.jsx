import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Perfil from '../../Assets/login-icon-2.jpg'
import Calendar from 'react-calendar'
import Endereco from "../../Components/Enderecos";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import './style.css'
import { Link } from "react-router-dom";


function Agendamento() {
    const [calend, setCalend] = useState(new Date())
    return (
        <>
            <Header />
            <section className="container-atendimento">
                <div className="content-service-type">
                    <div>
                        <h1 className="type-h1">"Serviço selecionado"</h1>
                        <span className="service-span">ex.Maquiagem</span>
                    </div>
                    <div>
                        <h1 className="type-h1">"Tipo de atendimento"</h1>
                        <span className="service-span">ex.No salão</span>
                    </div>
                </div>
                <Endereco />
            </section>
            <section className="container-calende-perfil-agendamento">
                <div className="content-perfil-agendamento">
                    <div className="perfil-agend">
                        <img src={Perfil} alt="Perfil profissional" />
                    </div>
                    <div className="date-agend">
                        <h1>User profissional</h1>
                        <h2>Maquiagem</h2>
                        <h2>Domicílio</h2>
                        <a href="#0">Ver comentários</a>
                    </div>
                </div>
                <div className="content-calend-horar">
                    <div className="calende-agenda">
                        <span>&gt;Selecione o dia em azul</span>
                        <Calendar onChange={setCalend} value={calend} />
                    </div>
                    <div className="horar-agenda">
                        <div className="list-hor">
                            <button>07:00 - 08:00</button>
                            <button>08:00 - 09:00</button>
                            <button>09:00 - 10:00</button>
                            <button>10:00 - 11:00</button>
                            <button>13:00 - 14:00</button>
                            <button>14:00 - 15:00</button>
                            <button>15:00 - 16:00</button>
                            <button>16:00 - 17:00</button>
                            <button>17:00 - 18:00</button>
                        </div>
                        <ul className="guia-hor-agend">
                            <li>1.Selecione horário em azul!</li>
                            <li>2.Horários em vermelho, indisponíveis!</li>
                        </ul>
                    </div>
                </div>
                <Link className="button-agendamento" to="/concluido">Confirmar</Link>
            </section>
            <Footer />
        </>
    )
};

export default Agendamento;