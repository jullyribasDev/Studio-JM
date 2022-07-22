import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Fundo from '../../Assets/sobrancelhas.jpg';
import Salao from '../../Assets/salao.jpg';
import './style.css'
import CardProfissional from "../../Components/CardProfissional";

function Home() {
    return (
        <>
            <Header />
            <section className="container-carossel">
                <img src={Fundo} alt="Foto Principal" />
                <div className="text-principal">
                    <h1>Studio JM</h1>
                    <p>Estética, Bem Estar & Auto - Estima</p>
                </div>
            </section>
            <section id="1" className="container-sobre">
                <div className="content-text">
                    <h2>Sobre o Salão</h2>
                    <h4>Lorem ipsum dolor, sit amet consectetur elit.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed itaque modi voluptate illum optio dolorem ratione cumque! Asperiores, suscipit temporibus! Harum odit ducimus quis! A quo quasi provident cum, molestias qui est numquam
                        fugit non vero esse recusandae dignissimos, eveniet ea rem molestiae porro adipisci quaerat amet suscipit vitae sunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore cumque sequi quas sed a facere
                        enim labore quaerat asperiores suscipit illum, delectus aliquam, reiciendis praesentium voluptatem, illo totam perspiciatis.</p>
                </div>
                <div className="content-img">
                    <img src={Salao} alt="sobre o salão" />
                </div>
            </section>
            <section id="2" className="container-service">
                <span className="service-span">Profissionais</span>
                <CardProfissional />
            </section>
            <section id="3" className="container-depoiments">
                <span className="span-depoiments">Comentários</span>
                <div className="content-depoiments">
                    <div className="depoiment-caixa">
                        <h1>Modelo 1</h1>
                        <a className="img-depoiments" href="#3"><img src="/img/modelo1.jpg" alt="depoimento um"/></a>
                        <p><strong>Lorem ipsum dolor sit amet elit.</strong> <br/>Harum, nobis? Sed reiciendis incidunt quos repellendus, temporibus odit cum ea deserunt explicabo maiores voluptatem velit tempore ut ab nesciunt qui sapiente!adipisicing elit.Harum,
                            nobis? Sed reiciendis incidunt quos repellendus.</p>
                        <a className="link-mais" href="#0">ver mais...</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;