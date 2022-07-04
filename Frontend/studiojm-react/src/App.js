import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Servico from "./Screens/Servicos";
import Profissional from './Screens/EditPerfilProfissional';

function App() {
    return (
        <div className="App">
           <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/servico' element={<Servico/>} />
                    <Route path='/updateProfissional' element={<Profissional/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;