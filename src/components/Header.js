import React, {Fragment} from 'react';
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
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="/tratamientos">Tratamientos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Servicios especiales</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    </Fragment>
);
export default Header;