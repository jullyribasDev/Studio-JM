import Logo from '../../Assets/logo_dourado_transparente.png';
import {Link} from 'react-router-dom';
import '../../Screens/Home/style.css'

function HeaderCadLog() {
    return (
        <>
            <header className="container-header" id="navbar">
                <Link id="logo-js" className="container-logo" to="/">
                    <img src={Logo} alt="logotipo" />
                </Link>
                <nav className="nav-log">
                    <Link className="cadastro" to="/cadastro">Voltar</Link> 
                </nav>
            </header>
        </>
    )
};

export default HeaderCadLog;