import api from "../../services/api";
import { useEffect, useState } from 'react'
import manicure from '../../Assets/manicure.jpg'
import { Link } from "react-router-dom";

function CardServico() {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        async function loadServices() {
            const services = await api.get("/servicos/all");
            setServicos(services.data);
        }
        loadServices();
    }, [])
    return (
        <>
            {servicos.map((servico, index) => (
                <div className="cards-service" key={index}>
                    <div className="img-card">
                        <img src={manicure} alt="Serviço Massagem" />
                        <p>{servico.procedimento}</p>
                    </div>
                    <div className="text-card">
                        <p>{servico.description}</p>
                        <Link to="/agendamento">Agendar</Link>
                    </div>
                </div>
            ))}
        </>
    )
};

export default CardServico;