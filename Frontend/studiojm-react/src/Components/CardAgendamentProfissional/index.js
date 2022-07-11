import './style.css'
import Perfil from '../../Assets/login-icon-2.jpg';
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
                        <a>Endereço do cliente</a>
                        <h2 className='data-endereco-cliente-agendamento'>Rua ******, Bairro ****, N° 4**</h2>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardAgendamentProfissional;