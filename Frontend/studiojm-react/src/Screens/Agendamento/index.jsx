import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Perfil from '../../Assets/login-icon-2.jpg'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import './style.css'


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
                <div className="content-endereco">
                    <a href="#0" >Visualizar endereço de atendimento</a>
                    <span>Rua *****, Bairro ****, 4**</span>
                </div>
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
                        <ul className="list-hor">
                            <li>07:00 - 08:00</li>
                            <li>08:00 - 09:00</li>
                            <li>09:00 - 10:00</li>
                            <li>10:00 - 11:00</li>
                            <li>13:00 - 14:00</li>
                            <li>14:00 - 15:00</li>
                            <li>15:00 - 16:00</li>
                            <li>16:00 - 17:00</li>
                            <li>17:00 - 18:00</li>
                        </ul>
                        <ul className="guia-hor-agend">
                            <li>1.Selecione horário em azul!</li>
                            <li>2.Horários em vermelho, indisponíveis!</li>
                        </ul>
                    </div>
                </div>
                <button className="button-agendamento" type="submit">Confirmar</button>
            </section>
            <Footer />
        </>
    )
};

export default Agendamento;