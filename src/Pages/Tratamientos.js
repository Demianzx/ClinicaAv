import React, { Fragment } from 'react';
//import imgServicios from '../images/Servicios.png';
import Tratamiento from'../components/Tratamiento';
import { Container, Row, Col } from 'react-bootstrap';

function Tratamientos () {
    
    return(
    <Fragment>
        <div className="text-center mt-3">
        <h1>Tratamientos</h1>
        </div>
        <div className="mt-5 ml-5 mr-5">
        <Container>
            <Row>
                <Col>
                <Tratamiento/>
                </Col>
                <Col>
                <Tratamiento/>
                </Col>
                <Col>
                <Tratamiento/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Tratamiento/>
                </Col>
                <Col>
                <Tratamiento/>
                </Col>
                <Col>
                <Tratamiento/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Tratamiento/>
                </Col>
                <Col>
                <Tratamiento/>
                </Col>
                <Col>
                <Tratamiento/>
                </Col>
            </Row>
        </Container>
        </div>
    </Fragment>
    )
}
export default Tratamientos;