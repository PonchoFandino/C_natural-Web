import React, { Component } from 'react';
import '../css/corporativo.css';
import Footer from './footer';
import Contenido1 from '../back/contenidoCorp1';
// import FormContact from '../back/contact';
import Idea from '../images/creativity.svg';
import Coordination from '../images/coordination.svg';
import catalogo from '../images/catalogue.svg';
import image from '../images/attach.svg';
import Muestra from '../images/corpMuestra2.svg';
import Progreso from './progreso'

class Corporativo extends Component{
    
    
    render(){
        
        return(
            <div>
               <Progreso/>
                <div className="spaceC">
                
                
                
                <div className="divImgM">
                <img src={Muestra} className="imgM"/>
                
                </div>
                
                  <div className="">
                  
                    <Contenido1/>
                    
                  </div>
                 
                  <div className="moreDiv">
                    <div className="ideaTxt">
                        <div className="infoIdea">
                            <img src={Idea} className="idea"/>
                            <h4>Desarrollamos tus ideas.</h4>
                            <p>nuestro compromiso es entregar un producto para que des la mejor impresión</p>
                        </div>
                    </div>
                   
                    <div className="ideaTxt1">
                        <div className="infoIdea">
                            <img src={Coordination} className="idea"/>
                            <h4>Coordinación exacta</h4>
                            <p>Diseño, representacion digital, y tiempos de entrega, todo en su punto. </p>
                        </div>
                    </div>
                    <div  className="ideaTxt2">
                        <div className="infoIdea">
                            <img src={catalogo} className="idea"/>
                            <p>Ó solo elije la referencia y empezamos!</p>
                            <button className="ideaBtn"><img src={image} className="idea1"/><h4>Catálogo</h4></button>
                        </div>
                    </div>
                   
                </div>
                <div>
                    <h2>Cuéntanos tu proyecto!</h2>
                    <form className="formCorp">
                        <span>
                        <h4>Nombre:</h4>
                        <input type="text" className="inputCorp"/>
                        <h4>E-mail:</h4>
                        <input type="mail" className="inputCorp"/> 
                        <h4>Celular/Tel:</h4>
                        <input type="telephone" className="inputCorp"/>
                        <h4>Mensaje:</h4>
                        <input type="textarea" className="inputCorp1"/>
                        </span>
                        <button className="ideaBtn" id="btnCorp"><p>Enviar</p></button>
                        
                    </form>
                    
                </div>
                
                </div>
                
                <div>
                    <Footer/>
                </div>
                
            </div>
        )
    }
}export default Corporativo;