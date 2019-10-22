import React, {Fragment} from 'react';
import {Link,NavLink} from 'react-router-dom';
import banner from '../images/banner.png';
import './Header.css'


const Header =()=>(
    <Fragment>
    <img src={banner} className="header-logo"/>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/inicio" className="Navbar-brand">
                Clinica Dental Aviación
            </Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to='/tratamientos'
                        className="nav-link"
                        activeClassName="active">
                            Tratamientos
                        </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contacto'
                        className="nav-link"
                        activeClassName="active">
                            Contacto
                        </NavLink>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>
    </Fragment>
);
export default Header;