import React, {Component} from 'react';
import '../css/styleDashboard.js';
import '../css/dashboard.css';
import cnaturalw from '../cnaturalW.svg';
import Footer from  './footer';
import flecha from '../images/flecha.svg'

class Dashboard extends Component{
    

    render(){
        return(
             <div className="wellcome3">
            
              <div className="wellcome2">
               <img src={cnaturalw} alt="" className="logo1"/>
                <p className="taller">Taller</p>
                 <div className="mariposa">
                </div>
                <div className="mariposa2">
                </div> 
                <div className="wellcome"></div>
             
              </div> 
              <p className="mes">Productos del mes</p>
                <div className="flecha">
                <img src={flecha} alt="" className="imgFlecha"/>
                </div>
            
              <Footer/>

            </div>
        )
    }
} export default Dashboard;

