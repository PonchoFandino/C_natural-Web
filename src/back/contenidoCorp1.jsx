import React, { Component } from 'react';
import {historias} from '../bDProvicional/contenido.json';
import '../css/Productos.css'


class Contenido1 extends Component{
    constructor(){
        super();
        this.state= {
            Contenido: historias
        }
        
    }
    render(){
        const Head= this.state.Contenido.map((historia, i) => {
            return (
              <div className="historia">
                  <div className="historiaDiv"  key={i}>
                      <div className="contenido">

                         <div className="tituloC">
                           <p>{historia.titulo}</p>
                         </div>
                         <div className="infoC"> 
                            {historia.descripcion}
                         </div>
                         <div className="imgHi">
                            <img className="imgContenido" src={historia.image} alt={historia.ref} />
                         </div>
                                
                          
                      </div>
                      
                  </div>
              </div>
            )
          });
        return(
            <div>
                {Head}
            </div>
        )
    }

}export default Contenido1;