import Header from '../../Header/Header'
import './LayoutHeader.css'

import {Outlet} from 'react-router'

const LayoutHeader = () => {
  return (
    <div className="layout-header">

        <Header />

        <main className="layout-header__main">
          <Outlet />
        </main>
        
    </div>
  )
}

export default LayoutHeader

