import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Servico from "./Screens/Servicos";
import Profissional from './Screens/EditPerfilProfissional';
import Agendamento from "./Screens/Agendamento";
import Profissionais from "./Screens/Equipe";
import AgendamentoProfissional from "./Screens/AgendamentosProfissional";
import AgendamentoConcluido from "./Screens/AgendamentoConlcuido";
function App() {
    return (
           <BrowserRouter>
                <Routes>
                    <Route path='/servicos' exact element={<Servico/>} />
                    <Route path='/updateProfissional' exact element={<Profissional/>} />
                    <Route path="/profissionais" exact element={<Profissionais />} />
                    <Route path="/agendar" exact element={<Agendamento />} />
                    <Route path="/agendamentos" exact element={<AgendamentoProfissional />} />
                    <Route path="/concluido" exact element={<AgendamentoConcluido />} />

                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
    )
}

export default App;