import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import Map from '../components/MapContainer';

function Contacto () {
    return(
    <Fragment>
            <h1 className="text-center mt-5 mb-5"> Contacto</h1>
            <Card className="mr-5 ml-5 mb-5">
            <Card.Header>Nombre</Card.Header>
            <Card.Body>
                <Card.Title>Clinica</Card.Title>
                <Card.Text>
                informacion adicional sobre la clinica
                </Card.Text>
                
            </Card.Body>
            </Card>
            
                <Map/>
            
    </Fragment>
    )
}
export default Contacto;