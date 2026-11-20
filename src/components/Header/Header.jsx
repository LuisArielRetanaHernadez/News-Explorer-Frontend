import './Header.css'

import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router'

import Navigation from '../Navigation/Navigation'
import SearchForm from '../SearchForm/SearchForm'

const Header = ({handleSearch}) => {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationRef = useRef()

  useEffect(() => {
    const handlesScrollY = () => setScrollY(window.scrollY)
    
    window.addEventListener('scroll', handlesScrollY)

    return () => {
      window.removeEventListener('scroll', handlesScrollY)
    }
  }, [])

  useEffect(() => {
    if (!navigationRef?.current) return

    const heightNavigation =  navigationRef.current.offsetHeight

    if (scrollY > heightNavigation * 2) {
      navigationRef.current.classList.add('header__navigation--blur')
    }

    if (scrollY < heightNavigation) {
      navigationRef.current.classList.remove('header__navigation--blur')
    }

  }, [navigationRef, scrollY])

  return (
    <header className="header"> 
      <div className="header__mesh header__container">
        <div 
          className={`header__navigation header__navigation--wrapper header__navigation--floating ${isMenuOpen ? 'header__navigation--menu-open' : ''}`}
          ref={navigationRef}
          >
            <Link className='header__logo' to="/">NewsExplorer</Link>
            <Navigation
              isMenuOpen={isMenuOpen}
              onMenuToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
              onMenuClose={() => setIsMenuOpen(false)}
            />
        </div>

          <div className="header__hero">
            <h1 className="header__hero-title">¿Que esta pasando en el mundo?</h1>
            <p className="header__hero-subtitle">Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal</p>
            <SearchForm handleSearch={handleSearch}/>
        </div>
      </div>        
    </header>
    )
}

export default Header
