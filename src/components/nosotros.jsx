import React, {Component} from 'react';
import '../css/nosotros.css';
import Footer from './footer';

class Nosotros extends Component{

    render(){
        return(
            <div>
              <div className="spaceC">
              <div className="separador">
               <div className="intro">
                   <p>C_Natural nació en 2003 como un proyecto en casa, donde el conocimiento y la maestría se generaron y moldearon a través de la experiencia.</p>
               </div>
               </div>
               <div className="medio">
                   <h4>En el principio</h4>
                   <p>C_Natural ha diseñado cofres en madera de excepcional calidad desde el 2003, siempre innovando, llevando la funcionalidad al limite sin perder el principio de diseño.
                        Han sido ya bastantes años de constante evolución, donde se han probado, implementado, mejorado y desechado; técnicas, materiales y herramientas que han permitido el constante crecimiento y llegar a la MAESTRIA en lo que hacemos.
                    </p>
               </div>
              </div>
             <Footer/>
            </div>
        )
    };
}; export default Nosotros;