import './style.css'
import Perfil from '../../Assets/login-icon-2.jpg';
import { useEffect, useState } from 'react';
import api from '../../services/api';

function CardAgendamentProfissional() {
    const [agenda, setAgenda] = useState();

    useEffect(() => {
        async function loadAgendamento() {
            const agendar = await api.get("/agendamento")
            setAgenda(agendar.data)

        }
        loadAgendamento();
    }, [])

    // async function deleteAgendamento() {
    //     const deleteAgenda = await api.delete(`/agendamento/deletar/:id`)
    //     return deleteAgenda;
    // }
    return (
        <>
            <div className="content-cards-agendamento">
                {agenda?.map((agend, index) => (
                    <div className='card-agendamento' key={index}>
                        <div className='perfil-cliente-agendamento'>
                            <img src={Perfil} alt="Perfil Cliente" />
                        </div>
                        <div className='data-cliente-agendamento'>
                            <span>{agend.cliente.nome}</span>
                            <span>{agend.profissional.servicos}</span>
                            <span>{agend.profissional.local}</span>
                            <span>16/04/2002 - 13:00</span>
                            <button/* onClick={() => { deleteAgendamento() }} */ className='button-agend-profissional' type='submit'>DELETAR</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default CardAgendamentProfissional;