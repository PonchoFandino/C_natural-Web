import React, { Component } from 'react';
import '../css/footer.css';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";
import cnaturalF from '../images/cnaturalF.svg'

class Footer extends Component{
render(){
    return(
        
        <div className="bodyFoot">
            <img src={cnaturalF} alt="logo" className="logoF"/>
            <div className="backF">
            <h3 className="follow">Síguenos</h3>
            <h3 className="info">Info</h3>
            <div className="infoDiv"> 
            info@cnatural.com.co 
            <br/>
            Taller
            (57) 567 19 14
            <a   className="infoWa" href="https://wa.me/+573144104508"><i class="fab fa-whatsapp"></i><p className="num"> +57 3144104508</p><p className="num1">Carlos </p></a>
            <a   className="infoWa" href="https://wa.me/+573156822293"><i class="fab fa-whatsapp"></i><p className="num"> +57 3156822293</p><p className="num1">Natalia</p></a>
            Ventas
            (57) 80 111 84
            <a  className="infoWa" href="https://wa.me/+5718011184"><i class="fab fa-whatsapp"></i><p  className="num"> +57 8011184</p><p className="num1">Gaby & Poncho</p></a>
            </div>
            <button className="btnF"><a href="https://fb.me/CNaturalTaller"><i class="fab fa-facebook-f"></i></a></button>
            <button className="btnI"><a href="https://www.facebook.com/C_Natural-308566953084665/?modal=admin_todo_tour"><i class="fab fa-instagram"></i></a></button>
            
           
            <div className="navFoot">
             <Link  className="buttonF" to="/nosotros/" ><p className="pA2">Nosotros</p></Link>
            <Link  className="buttonF" to="/contacto/" ><p className="pA2">Contacto</p></Link>
          </div>
            </div>
            <div>
            
            </div>

          <foot className="footF">C_Natural® 2018 © Desarrollado por Alfonso Fandiño.</foot> 
         
        </div>
        
    )
};
}; export default Footer;