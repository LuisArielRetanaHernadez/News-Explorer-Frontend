import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './LayoutBase.css'

import {Outlet} from 'react-router'

const LayoutHeader = () => {
  return (
    <div className="layout-header">

        <Header />

        <main className="layout-header__main">
          <Outlet />
        </main>
        
        <Footer />
    </div>
  )
}

export default LayoutHeader

