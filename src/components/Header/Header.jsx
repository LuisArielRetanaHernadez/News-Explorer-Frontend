import './Header.css'

import Navigation from '../Navigation/Navigation'

import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="header header--floating"> 
    
      <div className="header__container header__container--wrapper">
          <Link className='header__logo' to="/">NewsExplorer</Link>
          {/* componente Navigation */}
          <Navigation />
      </div>

    </header>
    )
}

export default Header
