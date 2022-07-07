import Logo from '../../Assets/logo_dourado_transparente.png';
import Lupa from '../../Assets/lupapesquisa.webp';
import Perfil from '../../Assets/login-icon-2.jpg';
import Menu from '../../Assets/menu-aberto.png';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <>
            <header className="container-header" id="navbar">
                <Link id="logo-js" className="container-logo" to="/">
                    <img src={Logo} alt="logotipo" />
                </Link>
                <nav className="container-form">
                    <div className="container-search">
                        <input type="search" name="search" id="search" />
                        <img className="lupa-search" src={Lupa} alt="Barra Pesquisa" />
                    </div>
                    <ul className="left-navbar">
                        <li className="nav-left"><a className='a' href="#1">Sobre o Salão</a></li>
                        <li className="nav-left"><Link className='a' to="/profissionais">Nossa Equipe</Link></li>
                        <li className="nav-left"><Link className='a' to="/servicos">Serviços</Link></li>
                        <li className="nav-left"><a className='a' href="#3">Depoimentos</a></li>
                        <li className="nav-left"><a className='a' href="#0">Agendamentos</a></li>
                    </ul>
                </nav>
                <nav className="nav-log">
                    <a className="cadastro" href="#0">Cadastre-se</a>
                    <div className="container-log">
                        <Link className="login" to="/updateProfissional">Login</Link>
                        <img className="log-img" src={Perfil} alt="Login" />
                    </div>
                </nav>
                <div className="menu-opc" >
                    <img src={Menu} alt="menu de opções" />
                </div>
            </header>
        </>
    )
};

export default Header;
