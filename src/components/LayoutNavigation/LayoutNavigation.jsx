import { Outlet, NavLink } from 'react-router'

import './LayoutNavigation.css'
import Header from '../Header/Header'


const LayoutNavigation = () => {

    return (
        <div className="layout-navigation">

            <Header />
            
            <main className="layout-navigation-main">
                <Outlet />
            </main>
           
        </div>
    )
}

export default LayoutNavigation