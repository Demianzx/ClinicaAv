import React, { Fragment } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import img from '../images/c1.jpg';
import { makeStyles, CardActionArea, CardMedia } from "@material-ui/core";
import Call from '@material-ui/icons/Call';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="card">
      <div className="card-header bg-light">
       
      </div>
      <div className="card-body bg-dark">
        <Container>
          <Row>
            <Col>
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={img}
                  title="Logo"
                />                
              </CardActionArea>
             
            </Card>
            </Col>
            <Col>
            <p className="card-text" style={{ color: 'white' }}>Blog</p>
            <p className="card-text" style={{ color: 'white' }}>Clinica</p>
            <p className="card-text" style={{ color: 'white' }}>Tratamientos</p>
            <p className="card-text" style={{ color: 'white' }}>Ortodoncia</p>
            <p className="card-text" style={{ color: 'white' }}>Precios</p>
            </Col>
            <Col>
            <h2>Llamanos Ahora</h2>
            
            <h4 className="card-text" style={{ color: 'white' }}><Call>Call</Call>  871 720 38 01</h4>
            </Col>
        
          </Row>
        </Container>
      </div>
    </div>
    </Fragment>
  );
}

export default Footer;