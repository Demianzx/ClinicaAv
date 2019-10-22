import React, {Fragment} from 'react';

import {
    Jumbotron, Button
  } from 'reactstrap';
  import Carrusel from './Carrusel'







function Inicio () {
    
    return(
        <Fragment>
    
    <div>
      <Jumbotron>
        <h1 className="display-3">Informacion, por actualizar!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
        <div>
            <Carrusel/>
        </div>
    
    
    </Fragment>

    )
}
export default Inicio;