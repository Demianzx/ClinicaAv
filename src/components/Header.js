import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap'


import './Header.css'


const Header =()=>(
    <Fragment>
    {/* <Image src={banner} fluid alt="Resposive image"/> */}
    <Navbar bg="dark" expand="lg" variant="dark" >
        <Navbar.Brand href="/inicio">Clinica Aviacion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/inicio" className="mr-1 mt-2">Inicio  </Link>  
            <Link to="/tratamientos" className="mr-1 mt-2">Tratamientos  </Link>
            <Link to="/contacto" className="mr-1 mt-2">Contacto  </Link>

            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Limpieza</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ortodoncia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Endodoncia</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Servicios especiales</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            
            <a className="mr-sm-2" href="https://master.dkwrryrnt1thw.amplifyapp.com/">Iniciar Sesion</a>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </Fragment>
);
export default Header;