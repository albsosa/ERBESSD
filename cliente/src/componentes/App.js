import React, { Component } from 'react';
import Header from './Header';
import {makeMainRoutes} from './routes';
const routes = makeMainRoutes();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {routes}
      </React.Fragment>

        
    
    );
  }
}

export default App;
