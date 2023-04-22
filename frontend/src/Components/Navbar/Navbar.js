import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary bg-gradient">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-uppercase text-color fw-bold" to='/'>RentalApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-color"  to='/allproperty'>AllProperties</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-color" to='/login'>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase text-color" to='signup'>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;