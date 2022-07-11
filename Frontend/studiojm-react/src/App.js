import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Servico from "./Screens/Servicos";
import Profissional from './Screens/EditPerfilProfissional';
import Agendamento from "./Screens/Agendamento";
import Profissionais from "./Screens/Equipe";
import AgendamentoProfissional from "./Screens/AgendamentosProfissional";
function App() {
    return (
           <BrowserRouter>
                <Routes>
                    <Route path='/servicos' element={<Servico/>} />
                    <Route path='/updateProfissional' element={<Profissional/>} />
                    <Route path="/profissionais" element={<Profissionais />} />
                    <Route path="/agendamento" element={<Agendamento />} />
                    <Route path="/meus-agendamentos" element={<AgendamentoProfissional />} />

                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
    )
}

export default App;