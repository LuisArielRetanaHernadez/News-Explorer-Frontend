import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './LayoutBase.css'

import {Outlet} from 'react-router'

const LayoutHeader = ({handleSearch}) => {
  return (
    <div className="layout-header">

        <Header handleSearch={handleSearch}/>

        <main className="layout-header__main">
          <Outlet />
        </main>
        
        <Footer />
    </div>
  )
}

export default LayoutHeader

