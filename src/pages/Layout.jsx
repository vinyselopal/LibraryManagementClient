import {Outlet} from 'react-router-dom'
import Menu from '../components/Menu'

function Layout () {
    return (
        <>
            <h1>Library Management</h1>
            <Menu />
            <Outlet />
        </>
    )
}

export default Layout
