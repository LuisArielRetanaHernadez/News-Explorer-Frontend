import './Header.css'

import Navigation from '../Navigation/Navigation'

import { Link } from 'react-router'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
  return (
    <header className="header header--floating"> 
    
      <div className="header__navigation header__navigation--wrapper header__navigation--floating">
          <Link className='header__logo' to="/">NewsExplorer</Link>
          {/* componente Navigation */}
          <Navigation />
      </div>

      <div className="header__hero">
          <div className="hero hero--relative">
            <div className="hero__content hero__content--wrapper">
                <h1 className="hero__title">¿Que esta pasando en el mundo?</h1>
                <p className="hero__subtitle">Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal</p>
                <SearchForm />
            </div>
        </div>
      </div>

    </header>
    )
}

export default Header
