import React, {Component} from 'react';
import '../css/styleDashboard.js';
import '../css/dashboard.css';
import Slider from './slider';
import cnaturalw from '../images/cnaturalW.svg';
import Footer from  './footer';
import Productos from '../back/products';
import mariposa3 from '../images/mariposa3.svg';
import caminoB from '../images/caminoB.svg';
import caminoA from '../images/caminoA.svg';
import mes from '../images/Mes.svg';
import ellas from '../images/Ellas.svg';
import oficina from '../images/Oficina.svg';
import hyd from '../images/HogarDeco.svg';

class Dashboard extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         direccion:"",
    //     }
    // }
    
    redireccion() {
       
        window.location.href='#ellas'     
    }; 

    render(){
        return(
            <div className="contenedor">
             <div className="wellcome3">
              <Slider/>
            
              <div className="wellcome2">
              <div className="wellcomeMargin"> </div>
               <img src={mariposa3} alt="" className="logo2"/>   
               <img src={cnaturalw} alt="" className="logo1"/>
              
                <p className="taller">Taller</p>
                 <div className="mariposa">
                 <img src={caminoB} alt="" className="Camino1"/>
                </div>
                <div className="mariposa2">
                <img src={caminoA} alt="" className="Camino2"/>
                </div> 
               
                <div className="wellcome">
                
                </div>
             
              </div> 
              {/* <p className="mes">Productos del mes</p> */}
                {/* <div className="flecha">
                <img src={flecha} alt="" className="imgFlecha"/>
                </div> */}
                <div className="space">
                {/* <div>
                    <button className="seccion"><p className="titPromo">Producto del mes</p><img src={mes} alt="" className="mes"/></button>
                    <button className="seccion2" onClick={this.redireccion}><p className="titPromo2">Ellas</p><img src={ellas} alt="" className="ellas"/></button>
                    <button className="seccion2"><p className="titPromo3">Oficina</p><img src={oficina} alt="" className="office"/></button>
                    <button className="seccion2"><p className="titPromo4">Hogar & decoracion</p><img src={hyd} alt="" className="hyd"/></button>
                </div> */}
                <Productos/>
                
                </div>
                <Footer/>

            </div>
            </div>
        )
    }
} export default Dashboard;

