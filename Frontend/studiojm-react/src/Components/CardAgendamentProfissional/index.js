import './style.css'
import Perfil from '../../Assets/login-icon-2.jpg';
import Endereco from '../Enderecos';
function CardAgendamentProfissional() {
    return (
        <>
            <div className="content-cards-agendamento">
                <div className='card-agendamento'>
                    <div className='perfil-cliente-agendamento'>
                        <img src={Perfil} alt="Perfil Cliente" />
                    </div>
                    <div className='data-cliente-agendamento'>
                        <span>User Cliente</span>
                        <span>Manicure</span>
                        <span>Domiciliar</span>
                        <span>16/04/2002 - 13:00</span>
                        <Endereco />
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardAgendamentProfissional;