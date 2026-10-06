import './Header.css'

import { Link } from 'react-router'

const Header = () => {
  return (
    <header className="header"> 
        <Link className='header__logo' to="/">Home</Link>
        {/* componente Navigation */}
    </header>
    )
}

export default Header
