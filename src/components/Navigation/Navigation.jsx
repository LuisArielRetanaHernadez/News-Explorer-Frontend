import './Navigation.css'

import { NavLink } from 'react-router'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item"><NavLink to="/">Inicio</NavLink></li>
                <li className="navigation-item"><NavLink to="/about">Iniciar Sesión</NavLink></li>
                <li className="navigation-item"><NavLink to="/contact">Registrarse</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation