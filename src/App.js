import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import AgregarCita from './components/AgregarCita';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Tratamientos from './components/Tratamientos';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/nueva-cita" component={AgregarCita}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/tratamientos" component={Tratamientos}/>
        <Route exact path="/" render={() => <Redirect to="/inicio" />} />
      </Switch>
    </Router>
  );
}

export default App;
