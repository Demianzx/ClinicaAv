import React, { Fragment } from "react";


const Footer = () => {
  return (
    <Fragment>
      <div className="card">
      <div className="card-header bg-light">
        Pie de pagina
      </div>
      <div className="card-body bg-dark">
        <h5 className="card-title">Contenido especial de pie de pagina</h5>
        <p className="card-text">Informacion de Contenido del pie de pagina</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </Fragment>
  );
}

export default Footer;