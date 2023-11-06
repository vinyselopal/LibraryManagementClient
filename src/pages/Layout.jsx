import {Outlet} from 'react-router-dom'

function Layout () {
    return (
        <>
            <h1>Library Management</h1>
            <Outlet />
        </>
    )
}

export default Layout
