import React, { Component } from 'react';
import Producto from './Producto';
import './Productos.css';

class Productos extends Component {
    
    render() { 
        return ( 
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(key => (

                        <Producto
                            key={key}
                            info = {this.props.productos[key]}
                        />
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default Productos;