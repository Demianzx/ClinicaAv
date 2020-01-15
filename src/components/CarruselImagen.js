import React, { useState, Fragment } from 'react';
import banner from '../images/banner.png';
import img01 from '../images/ServiciosBan.png';
import img02 from '../images/horarios.png';
import Carousel from 'react-bootstrap/Carousel';




const Carrusel = (props) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };
  return(
      <Fragment>
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img01}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img02}
          alt="Third slide"
        />        
      </Carousel.Item>
    </Carousel>
            
      </Fragment>
  );
}

export default Carrusel;