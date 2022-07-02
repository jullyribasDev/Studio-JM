import Logo from '../../Assets/logo_preto_dourado_transparente.png';
import Whats from '../../Assets/whatsapp.png';
import Face from '../../Assets/facebook.png';
import Insta from '../../Assets/instagram.png';

function Footer() {
    return (
        <footer className="container-footer">
            <div className="links">
                <img className="logo-footer" src={Logo} alt="Logo Footer" />
                <ul className="links-lista">
                    <li className="links-itens"><a href="#">Equipe</a></li>
                    <li className="links-itens"><a href="#">Sobre</a></li>
                    <li className="links-itens"><a href="#">Serviços</a></li>
                    <li className="links-itens"><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="rede-sociais">
                <span className="rede-titulos">Nossas redes</span>
                <ul className="redes-lista">
                    <li className="redes-itens">
                        <a className="redes-img" href="#"><img src={Whats} alt="WhatsApp" /></a>
                    </li>
                    <li className="redes-itens">
                        <a className="redes-img" href="#"><img src={Face} alt="Facebook" /></a>
                    </li>
                    <li className="redes-itens">
                        <a className="redes-img" href="#"><img src={Insta} alt="Instagram" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;