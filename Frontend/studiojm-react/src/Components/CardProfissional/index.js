import Modelo from '../../Assets/modelo2.jpg'
import api from "../../services/api";
import { useState, useEffect } from 'react'
import './style.css'

function CardProfissional() {
    const [profissionais, setProfissional] = useState([]);

    useEffect(() => {
        async function loadProfissionais() {
            const profissional = await api.get("/profissional/all");
            setProfissional(profissional.data);
        }
        loadProfissionais();
    }, [])
    return (
        <div className="equipe">
            {profissionais.map((professional, index) => (
                <div className="equipe-lista" key={index}>
                    <img src={Modelo} alt="Profissional" />
                    <span>{professional.nome}</span>
                    <p>{professional.userName}</p>
                    <button>Agendar</button>
                </div>
            ))}
        </div>
    )
};

export default CardProfissional;