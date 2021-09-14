import React from 'react'
import { Link , NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/' >Use Context</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                activeClassName='active' 
                                className='nav-link'
                                to={{ pathname:'/'}}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName='active'
                                className='nav-link' 
                                to={{ pathname:'/about'}}>Acerca de </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName='active'
                                className='nav-link'
                                to={{ pathname:'/login'}}>Inicio de session</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
