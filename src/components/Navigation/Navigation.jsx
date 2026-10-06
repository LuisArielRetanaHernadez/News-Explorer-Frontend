import './Navigation.css';

import { Link } from 'react-router';

const Navigation = () => {
  return (
  <nav className="navigation">
    <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/saved-news">Articulos Guardados</Link></li>
        <li><Link to="/signin">Iniciar Sesion</Link></li>
        <li><Link to="/signup"><button className="navigation__button">Registrarse</button></Link></li>
    </ul>
  </nav>
  )
}

export default Navigation;