import './Navigation.css';

import { NavLink } from 'react-router';

import { usePopupLoginForm } from '../PopupLoginForm/PopupLoginForm';

import menu from '../../images/menu.svg' 

const Navigation = ({ isMenuOpen, onMenuToggle, onMenuClose}) => {

  const toggleOpen = usePopupLoginForm(state => state.toggleOpen)


  const handleLoginClick = () => {
    onMenuClose()
    toggleOpen()
  }

  return (
  <nav className="navigation">
    <button
      className={`navigation__menu-toggle ${isMenuOpen ? 'navigation__menu-toggle--open' : ''}`}
      type="button"
      onClick={onMenuToggle}
    >
      {isMenuOpen ? <span className="navigation__close-icon" /> : <img src={menu} alt="" />}
    </button>
    <ul id="main-navigation-list" className={`navigation__list ${isMenuOpen ? 'navigation__list--open' : ''}`}>
        <li className='navigation__item'><NavLink className={({ isActive, _ }) => isActive ? 'navigation__link navigation__link--active' : 'navigation__link'} to="/" onClick={onMenuClose}>Inicio</NavLink></li>
        <li className='navigation__item'><button className='navigation__button navigation__button--circle' onClick={e => handleLoginClick()}>Iniciar Sesion</button></li>
    </ul>
  </nav>
  )
}

export default Navigation;