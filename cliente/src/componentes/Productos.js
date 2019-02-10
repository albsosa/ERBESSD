import React, { Component } from 'react';
import Producto from './Producto';
import './Productos.css';
import {Bar, Line, Pie} from 'react-chartjs-2';

import axios from 'axios';

class Productos extends Component {

    state = {
            productos : []
    }

    componentWillMount() {

       this.queryAPI();
    }

    queryAPI = () => {
        // console.log(this.props.auth.getAccessToken() );
        const { getAccessToken } = this.props.auth;

        const headers = { 'Authorization': `Bearer ${getAccessToken() }` };

        const url = 'http://localhost:5000/productos';

        return axios.get(url, {headers} )
            .then(respuesta => this.setState({productos: respuesta.data }));

    }



    login = () => {
        this.props.auth.login();
    }

     render() { 
         const { isAuthenticated } = this.props.auth;

          return ( 
               <div className="productos">
                    
                    { isAuthenticated() && (
                        <React.Fragment>
                            <h2>Nuestra Gráficas</h2>
                            <div className="chart" location="Massachusetts" legendPosition="bottom">
                                <Bar
                                    data={this.state.productos}
                                    width={1000}
                                    height={500}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>
                            {/* <ul className="lista-productos">
                                {Object.keys(this.state.productos).map(producto => (
                                    <Producto
                                        informacion={this.state.productos[producto]}
                                        key={producto}
                                    />
                            )) }
                            </ul> */}
                        </React.Fragment> 
                    )

                    }
                    

                    {  !isAuthenticated() && (
                        <div className="contenedor-boton">
                            <p>Para ver el contenido debes estar logueado:</p>
                            <a className="boton" onClick={ this.login }>Iniciar Sesión</a>
                        </div>
                    ) }

                    
               </div>
           )
     }
}
 
export default Productos;