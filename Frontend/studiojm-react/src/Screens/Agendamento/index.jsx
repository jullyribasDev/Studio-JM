import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Perfil from '../../Assets/login-icon-2.jpg'
import Calendar from 'react-calendar'
import date from '../../jsons/fakeData.json'
import 'react-calendar/dist/Calendar.css';
import './style.css'

function Agendamento() {
    const [calend, setCalend] = useState()
    const [profissional, setProfissional] = useState();
    const { state } = useLocation();

    // const navigate = useNavigate();
    // const concluirAgendamento = () => {
    //      navigate("/concluido", { state: { id:  profissional} })
    // }
    useEffect(() => {
        async function loadProfissional() {
            const enederecos = await api.get(`/profissional/agendar/${state.id}`);
            setProfissional(enederecos.data);
        }
        loadProfissional();
    }, [state])
    return (
        <>
            <Header />
            <section className="container-atendimento">
                <div className="content-service-type">
                    <div>
                        <h1 className="type-h1">"Serviço selecionado"</h1>
                        <span className="service-span">{profissional?.servicos}</span>
                    </div>
                    <div>
                        <h1 className="type-h1">"Tipo de atendimento"</h1>
                        <span className="service-span">{profissional?.local}</span>
                    </div>
                </div>
                <div className="content-endereco">
                    <a href="#0" >Visualizar endereço de atendimento</a>
                    <span>{profissional?.bairro} - {profissional?.endereco}</span>
                </div>
            </section>
            <section className="container-calende-perfil-agendamento">
                <div className="content-perfil-agendamento">
                    <div className="perfil-agend">
                        <img src={Perfil} alt="Perfil profissional" />
                    </div>
                    <div className="date-agend">
                        <h1>{profissional?.nome}</h1>
                        <h2>{profissional?.servicos}</h2>
                        <h2>{profissional?.local}</h2>
                        <a href="#0">Ver comentários</a>
                    </div>
                </div>
                <div className="content-calend-horar">
                    <div className="calende-agenda">
                        <span>&gt;Selecione o dia em azul</span>
                        <Calendar onChange={setCalend} value={calend} onClickDay={(e) => { console.log(e) }} />
                    </div>
                    <div className="horar-agenda">
                        <div className="list-hor">
                            {date.horarios.map((hora, i) => (
                                <button onClick={(e) => { console.log(hora) }} key={i}>
                                    {hora}
                                </button>
                            ))}
                        </div>
                        <ul className="guia-hor-agend">
                            <li>1.Selecione horário em azul!</li>
                            <li>2.Horários em vermelho, indisponíveis!</li>
                        </ul>
                    </div>
                </div>
                <button /*onClick={() => concluirAgendamento()}*/ className="button-agendamento" >Confirmar</button>
            </section>
            <Footer />
        </>
    )
};

export default Agendamento;