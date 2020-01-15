import React, { Fragment } from 'react';
//import imgServicios from '../images/Servicios.png';
import Tratamiento from'../components/Tratamiento';
import { Container, Row, Col } from 'react-bootstrap';
import limpiezaImg from '../images/limpieza.jpg';
import blanqueamientoImg from '../images/blanqueamiento.jpg';
import ortodonciaImg from '../images/ortodoncia.jpg';
import implantesImg from '../images/implante.jpg';
import carillasImg from '../images/carilla.jpg';
import coronaImg from '../images/corona.jpg';
import endodonciaImg from '../images/endodoncia.jpg';
import resinaImg from '../images/resina.png';


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
                <Tratamiento img={limpiezaImg} titulo="Limpieza" descripcion="Nuestros especialistas recomiendan realizarte una limpieza dental cada 6 meses para mantener el estado de salud general de tu boca."/>
                </Col>
                <Col>
                <Tratamiento img={blanqueamientoImg} titulo="Blanqueamiento" descripcion="El blanqueamiento ayuda a que tengas una sonrisa radiante sin dañar el esmalte de tus dientes."/>
                </Col>
                <Col>
                <Tratamiento img={ortodonciaImg} titulo="Ortodoncia" descripcion="Los brackets metálicos son una de las opciones más eficaces en tratamientos de ortodoncia debido a su versatilidad, precisión y fácil mantenimiento."/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Tratamiento img={implantesImg} titulo="Implantes" descripcion="Los implantes dentales son lo más cercano a un diente natural, por lo que volverás a sonreír con confianza."/>
                </Col>
                <Col>
                <Tratamiento img={carillasImg} titulo="Carillas Dentales" descripcion="Las carillas dentales son la solución ideal para lucir dientes perfectos y una sonrisa radiante."/>
                </Col>
                <Col>
                <Tratamiento img={coronaImg} titulo="Coronas Dentales" descripcion="Las coronas dentales tienen utilidades estéticas y funcionales para brindar fuerza a tus dientes."/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Tratamiento img={endodonciaImg} titulo="Endodoncia" descripcion="La endodoncia es el tratamiento que permite salvar tu diente de una extracción."/>
                </Col>
                <Col>
                <Tratamiento img={resinaImg} titulo="Resina Dental" descripcion="Una resina dental es la solución ideal para reparar piezas dentales dañadas por caries o diversos problemas en los dientes y obtener nuevamente una dentadura sana."/>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
        </div>
        
    </Fragment>
    )
}
export default Tratamientos;