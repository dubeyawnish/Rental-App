import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.user)
    //console.log(user);

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        localStorage.removeItem("user")
        dispatch({ type: "LOGOUT" })
        navigate("/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-uppercase  fw-bold" to='/'>RentalApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to='/allproperty'>AllProperty</NavLink>
                            </li>
                            {user && user.user.firstName && user.user.role === 'owner' ? <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to='/myproperty'>MyProperty</NavLink>
                            </li> : ''}
                            {user && user.user.firstName && user.user.role === 'owner' ? <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to='/addproperty'>AddProperty</NavLink>
                            </li> : ""}
                            {user && user.user.firstName && user.user.role === 'owner' ? <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to='/mytenants'>MyTenants</NavLink>
                            </li> : ""}
                            {user && user.user.firstName ? <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to='/profile'>Profile</NavLink>
                            </li> : ""}
                            {user && user.user.firstName ? '' : <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to='/login'>Login</NavLink>
                            </li>}
                            {user && user.user.firstName ? '' : <li className="nav-item">
                                <NavLink className="nav-link text-uppercase " to='/signup'>Register</NavLink>
                            </li>}

                        </ul>
                        {user && user.user.firstName ? <div className="nav-item">
                            <button className=" btn btn-danger " onClick={() => logout()} >LogOut</button>
                        </div> : ""}

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;