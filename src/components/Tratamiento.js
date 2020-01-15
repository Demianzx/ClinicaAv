import React, { Fragment } from 'react';
import { Card,Button } from 'react-bootstrap';


function Tratamiento(props){
    
    return(
        <Fragment>
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                {/* <Button variant="primary">Ir Mas Información</Button> */}
            </Card.Body>
            </Card>
            
        </Fragment>
    )
}
export default Tratamiento;