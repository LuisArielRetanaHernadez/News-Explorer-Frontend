import './LayoutHeader.css'

import {Outlet} from 'react-router'

const LayoutHeader = () => {
  return (
    <>
        <h2>Layout Header</h2>
        <Outlet />
    </>
  )
}

export default LayoutHeader

