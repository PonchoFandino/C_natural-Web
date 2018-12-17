import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../components/dashboard'; 
import Tienda from '../components/tienda';
import Corporativo from '../components/corporativo';
import Proyectos from '../components/proyectos';
import Nosotros from '../components/nosotros';
import Contacto from '../components/contacto';
import logoHome from '../images/cnatural.svg';
import Canasta from '../images/prueba1.svg'


class Nav extends Component {
  constructor(){
    super();
    this.state={
   

    };
  };
/*metodos javascript utilizados para cambiar la barra de navegacion de lugar entre paginas

// changeMargin() {
//   document.getElementById("navi").style.marginBottom = "50.5%";
 
  
// }  
// returnMargin(){
//   document.getElementById("navi").style.marginBottom="0%"
// }
// background(){
//   document.getElementById("navi").style.background="rgba(0, 0, 0, 0.281)"
// }*/
  render() {
    return (
      
    <Router> 
      
      <div className="App">
        <nav className="contenedor">
        <div className="navBar"  id="navi">
            <Link  className="button2" to="/" ><p className=""><img src={logoHome} alt="" className="home"/></p></Link>
        <input type="checkbox" id="main"/>
        <label for="main" className="menu"><i class="fas fa-ellipsis-v"></i></label>
          <div className="nav1">
            
           <li><Link  className="button1" to="/productos/" ><p className="pA">Productos</p></Link></li> 
           <li><Link  className="button1" to="/corporativo/" ><p className="pA">Corporativo</p></Link></li>
           <li><Link  className="button1" to="/proyectos/" ><p className="pA">Proyectos</p></Link></li>
           <li><Link  className="button1" to="/nosotros/" ><p className="pA">Nosotros</p></Link></li>
           <li><Link  className="button1" to="/contacto/" ><p className="pA">Contacto</p></Link></li>
           <li><Link  className="button1" to="/canasta/" ><p className="pa"><img src={Canasta} alt="" className="shopCard"/>0</p></Link></li>
          </div>
          
        </div>
        </nav>
      
        <Route exact path="/" render={() => <Dashboard />} />
        <Route path="/productos/" render={() => <Tienda />} />
        <Route path="/corporativo/" render={() => <Corporativo />} />
        <Route path="/proyectos/" render={() => <Proyectos />} />
        <Route path="/nosotros/" render={() => <Nosotros />} />
        <Route path="/contacto" render={() => <Contacto />} />

       
      </div>
      </Router> 
    );
  }
}

export default Nav;
