import React, {Component} from 'react';
import './Navegacion.css';
import {NavLink} from 'react-router-dom';


class Navegacion extends Component {

    iniciarSesion = () => {
        this.props.auth.login();
    }

    cerrarSesion = () => {
        this.props.auth.logout();
    }
    
     render(){
  
        // console.log(this.props.auth);
        console.log(this.props.auth.getAccessToken() );


        const { isAuthenticated } = this.props.auth;

        let resultado;

        if( isAuthenticated() ) {
            resultado = <a onClick={this.cerrarSesion}>Cerrar Sesión</a>
        } else {
            resultado = <a onClick={this.iniciarSesion}>Iniciar Sesión</a>
        }

        return ( 
            <nav className="navegacion">
                 <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                 <NavLink to={'/productos'} activeClassName="activo">Gráficas de productos</NavLink>
                 <NavLink to={'/contacto'} activeClassName="activo">Contacto</NavLink>
                 {resultado}
            </nav>
        );
     }
}
 
export default Navegacion;