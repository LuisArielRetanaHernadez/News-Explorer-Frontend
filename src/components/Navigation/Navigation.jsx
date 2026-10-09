import './Navigation.css';

import { Link, NavLink } from 'react-router';

const Navigation = () => {
  return (
  <nav className="navigation">
    <ul className="navigation__list">
        <li className='navigation__item'><NavLink className={({ isActive, isPending }) => isActive ? 'navigation__link navigation__link--active' : 'navigation__link'} to="/">Inicio</NavLink></li>
        {false && <li className='navigation__item'><Link className='navigation__link' to="/saved-news">Articulos Guardados</Link></li>}
        {false && <li className='navigation__item'><button className='navigation__button'>Salir</button></li>}
        <li className='navigation__item'><button className='navigation__button navigation__button--circle'>Iniciar Sesion</button></li>
        {false && <li className='navigation__item'><button className="navigation__button">Registrarse</button></li>}
    </ul>
  </nav>
  )
}

export default Navigation;