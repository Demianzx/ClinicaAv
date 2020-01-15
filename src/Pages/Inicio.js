import React, {Fragment} from 'react';

import {
    Jumbotron, Button
  } from 'reactstrap';
  import Carrusel from '../components/CarruselImagen';
  import Card from '@material-ui/core/Card';
  import CardActionArea from '@material-ui/core/CardActionArea';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
 
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
import img01 from '../images/001.jpg';
import img02 from '../images/002.jpg';
import img03 from '../images/003.png';
import img04 from '../images/004.jpg';
import img05 from '../images/005.png';
import dentista from '../images/dentista.jpg';
  
  const useStyles = makeStyles({
    card: {
      maxWidth: 245,
    },
    media: {
      height: 245,
    },
  });

  function Inicio () {
    const classes = useStyles();
    return(
        <Fragment>
    
    
        <div style={{width: 'auto', height: 'auto'}}>
            <Carrusel/>        
        </div>
        <Container>
          <Row>
            <Col>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image= {img01}
              title="imagen 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Profesionalismo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               Confía en nosotros, tenemos mas de 5 años de experiencia y somos los unicos con el respaldo del Centro de Diagnostico Aviacion.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>            
            <Button size="small" color="primary">
              Conoce más
            </Button>
          </CardActions>
        </Card>
        </Col>
        <Col>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img02}
              title="imagen 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Flexibilidad
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Elige cuando atenderte, nuestra clinica dental tiene especialistas para cada miembro de tu familia.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            Conoce más
            </Button>
          </CardActions>
        </Card>
        </Col>
        <Col>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img03}
              title="imagen 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Claridad
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Siempre conocerás el precio de tus servicios dentales, nuestros precios son fijos y se encuentran a la vista
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            Conoce más
            </Button>
          </CardActions>
        </Card>
        </Col>
        <Col>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img04}
              title="imagen 4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Facilidades de pago.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Paga hasta 18 MSI. Aceptamos Visa, MasterCard, American Express*.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            Conoce más
            </Button>
          </CardActions>
        </Card>
        </Col>
        <Col>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img05}
              title="imagen 5"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Beneficios con aseguradoras
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Acercate y conoce mas sobre nuestros planes dentales y como puedes acceder a ellos.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            Conoce más
            </Button>
          </CardActions>
        </Card>
        </Col> 
        </Row>
        </Container>




        <div>
          <Jumbotron>
            <Row>
              <Col>
            <h2 className="display-3">Tu salud dental es primero.</h2>
            <p className="lead">¡Haz tu cita hoy mismo! Y conoce los servicios dentales que tenemos para ti y tu familia</p>                       
              </Col>
              <Col>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={dentista}
                    title="imagen 3"
                  />                  
                </CardActionArea>
               </Card>
              </Col>
            </Row>
          </Jumbotron>
        </div>
    
    </Fragment>

    )
}
export default Inicio;