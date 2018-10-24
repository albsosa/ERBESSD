import React, { Component } from 'react';
import './styles.css'; 
class Buscador extends Component {

    leerDatos = (e) => {
        //termino de busqueda
        const termino = e.target.value;

        //Se envía por props al componente principal 
        this.props.busqueda(termino);

    }
    
    render() { 
        return ( 
            <div>
                <form className="buscador">
                    <input type="text" placeholder="Búsqueda" onChange={this.leerDatos}/>

                </form>
            </div>
         );
    }
}
 
export default Buscador;