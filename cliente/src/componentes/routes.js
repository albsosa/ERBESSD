import React from 'react';
import { Route, Router } from 'react-router-dom';
//auth0
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

//componentes propios
import Productos from './Productos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Error from './Error';
import Header from './Header';
import Navegacion from './Navegacion';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
//npm run servidor
export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div className="contenedor">
        <Header />
        <Navegacion auth={auth} />
      
        <Route exact path="/" render={() => (
              <Nosotros 
                   
              />
          )} />
          <Route exact path="/nosotros" render={() => (
            <Nosotros 
                 
            />
        )} />
          <Route exact path="/productos" render={(props) => (
              <Productos 
                  auth={auth} {...props} 
              />
          )} />
          <Route exact path="/contacto" component={Contacto} />

          
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
