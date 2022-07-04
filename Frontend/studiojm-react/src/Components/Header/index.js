import Logo from '../../Assets/logo_dourado_transparente.png';
import Lupa from '../../Assets/lupapesquisa.webp';
import Perfil from '../../Assets/login-icon-2.jpg';
import Menu from '../../Assets/menu-aberto.png';


function Header() {
    return (
        <>
            <header className="container-header" id="navbar">
                <a id="logo-js" className="container-logo" href="/">
                    <img src={Logo} alt="logotipo" />
                </a>
                <nav className="container-form">
                    <div className="container-search">
                        <input type="search" name="search" id="search" />
                        <img className="lupa-search" src={Lupa} alt="Barra Pesquisa" />
                    </div>
                    <ul className="left-navbar">
                        <li className="nav-left"><a href="#1">Sobre o Salão</a></li>
                        <li className="nav-left"><a href="/updateProfissional">Nossa Equipe</a></li>
                        <li className="nav-left"><a href="/servico">Serviços</a></li>
                        <li className="nav-left"><a href="#3">Depoimentos</a></li>
                        <li className="nav-left"><a href="#0">Agendamentos</a></li>
                    </ul>
                </nav>
                <nav className="nav-log">
                    <a className="cadastro" href="#0">Cadastre-se</a>
                    <div className="container-log">
                        <a className="login" href="#0">Login</a>
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

