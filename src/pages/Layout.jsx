import {Outlet} from 'react-router-dom'
import Menu from '../components/Menu'

function Layout () {
    return (
        <div className="h-screen">
            <div className="p-3 bg-blue-500 text-white">
                <h1>Library Management</h1>
            </div>
            <div className="flex flex-row h-full">
                <Menu />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
