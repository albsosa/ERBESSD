import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/WISER_MANO-1-e1544637765529.png" alt="Imagen nosotros" />
                </div>
                <div className="contenido">
                    <h2>A través del tiempo...</h2>
                    <p>Es difícil imaginar como una pequeña idea puede transformar la vida de tanta gente…</p>
                    <p>– Acabo de tener una idea! Que tal si compro una fotoresistencia y un resistor e intento hacer un sensor óptico con eso para poder balancear con mi computadora -.</p>
                </div>
            </div>

         );
    }
}
 
export default Nosotros;