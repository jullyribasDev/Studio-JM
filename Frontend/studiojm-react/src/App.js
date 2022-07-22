import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Profissional from './Screens/EditPerfilProfissional';
import Agendamento from "./Screens/Agendamento";
import Profissionais from "./Screens/Equipe";
import AgendamentoProfissional from "./Screens/AgendamentosProfissional";
import AgendamentoConcluido from "./Screens/AgendamentoConlcuido";
import Login from "./Screens/Login";
import Cadastro from "./Screens/Cadastro";
import CadastroCliente from "./Components/CadastroCliente";
import CadastroProfissional from "./Components/CadastroProfissional";
import PerfilProfissional from "./Screens/perfilProfissional";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro" exact element={<Cadastro />} />
                <Route path="/cadastroCliente" exact element={<CadastroCliente />} />
                <Route path="/cadastroProfissional" exact element={<CadastroProfissional />} />
                <Route path="/login" exact element={<Login />} />

                <Route path='/perfil' exact element={<PerfilProfissional />} />
                <Route path='/updateProfissional' exact element={<Profissional />} />
                <Route path="/profissionais" exact element={<Profissionais />} />
                <Route path="/agendar" exact element={<Agendamento />} />

                <Route path="/agendamentos" exact element={<AgendamentoProfissional />} />
        
                <Route path="/concluido" exact element={<AgendamentoConcluido />} />

                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;