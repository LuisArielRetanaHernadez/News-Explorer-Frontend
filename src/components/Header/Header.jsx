import './Header.css'

import { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router'

import Navigation from '../Navigation/Navigation'

import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
  const [scrollY, setScrollY] = useState(0)


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
    <header className="header header--floating"> 
    
      <div 
        className="header__navigation header__navigation--wrapper header__navigation--floating"
        ref={navigationRef}
        >
          <Link className='header__logo' to="/">NewsExplorer</Link>
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
