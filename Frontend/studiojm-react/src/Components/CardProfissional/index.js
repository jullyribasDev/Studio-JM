import Modelo from '../../Assets/modelo2.jpg'
import api from "../../services/api";
import { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

function CardProfissional() {
    const [profissionais, setProfissional] = useState([]);
    const navigate = useNavigate();
    const agendarClick = (professional) =>{ 
         navigate("/agendar", {state: {id: professional.id_profissional}})
    }
   
    useEffect(() => {
        async function loadProfissionais() {
            const profissional = await api.get("/profissional/");
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
                    <p>{professional.servicos}</p>
                    <button onClick={() => agendarClick(professional)}>Agendar</button>
                </div>
            ))}
        </div>
    )
};

export default CardProfissional;