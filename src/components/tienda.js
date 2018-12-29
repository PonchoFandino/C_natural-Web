import React, { Component } from 'react';
import '../css/tienda.css';
// import Slider from './slider';
// import { Items } from '../bDProvicional/productos.json';
import Productos from '../back/products';
import Footer from './footer';
// import Progreso from './progreso';

class Tienda extends Component{
  constructor(){
    super();{
      this.state = {
        
      }
    }
  }

 render(){
    return(
        <div>
          {/* <Progreso/> */}
          {/* <div className="portadaT">
                <Slider/>
          </div> */}
          
          {/* <div className="titulo">
            Nuestros productos son hechos por artesanos que entregan lo mejor de sí en cada pieza :)
          </div> */}
          
          <div className="spaceT">
         
          <div className="">
          <Productos/>
            
          </div>
          
          </div>
          
          <Footer/>
         
              
        </div>
    );
  }
};  export default Tienda;