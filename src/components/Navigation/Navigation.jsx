import './Navigation.css';

import { Link } from 'react-router';

const Navigation = () => {
  return (
  <nav className="navigation">
    <ul>
        <li><Link to="/">Inicio</Link></li>
        {false && <li><Link to="/saved-news">Articulos Guardados</Link></li>}
        {false && <li><button>Salir</button></li>}
        <li><button>Iniciar Sesion</button></li>
        {false && <li><button className="navigation__button">Registrarse</button></li>}
    </ul>
  </nav>
  )
}

export default Navigation;