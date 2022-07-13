import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Endereco from "../../Components/Enderecos";
import Concluido from '../../Assets/concluido.png';
import './style.css';

function AgendamentoConcluido() {
    return (
        <>
            <Header />
            <main className="container-agendamento-concluido">
                <div className="content-concluido">
                    <img src={Concluido} alt="Agendamento Concluido" />
                    <h1>Agendado com Sucesso</h1>
                </div>
                <Endereco />
                <form  className="content-comentario">
                    <span>"Deixe seu comentário após seu atendimento!"</span>
                    <label htmlFor="comentario">Digite seu comentário aqui:</label>
                    <textarea id="comentario" name="comentario" rows="10" cols="40" placeholder="Diga como foi sua experiência..."></textarea>
                    <div className="buttons">
                        <button className="btn-submit" type="submit">Enviar</button>
                        <button className="btn-reset" type="reset">Apagar</button>
                    </div>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default AgendamentoConcluido;