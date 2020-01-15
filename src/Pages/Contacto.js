import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Map from '../components/MapContainer';

function Contacto () {
    return(
    <Fragment>
            <h1 className="text-center mt-5 mb-5"> Contacto</h1>
            <Card className="mr-5 ml-5 mb-5">
            <Card.Header>Informacion</Card.Header>
            <Card.Body>
                <Card.Title>Clinica Aviación</Card.Title>
                <Card.Text>
                <p>Dirección: Bolivia #374 Colonia Aviación, Torreón Coah.</p>
                <p>Tel: 720 38 01</p>
                <p>Misión:frecer un servicio dental de calidad para la comunidad. </p>
                <p>Visión: contar con instalaciones de primer nivel y ampliar a diferentes sectores de la ciudad para hacer crecer en número el consultorio </p>
                </Card.Text>
                
            </Card.Body>
            </Card>
            
                <Map/>
            
    </Fragment>
    )
}
export default Contacto;