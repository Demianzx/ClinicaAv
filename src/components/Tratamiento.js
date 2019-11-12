import React, { Fragment } from 'react';
import { Card,Button } from 'react-bootstrap';
import img from '../images/diente.jpg';

function Tratamiento(){
    
    return(
        <Fragment>
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Tratamiento</Card.Title>
                <Card.Text>
                    Alguna descripcion del tratamiento.
                </Card.Text>
                <Button variant="primary">Ir Mas Información</Button>
            </Card.Body>
            </Card>
            
        </Fragment>
    )
}
export default Tratamiento;