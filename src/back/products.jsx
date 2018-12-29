import React, { Component } from 'react';
import '../css/tienda.css';
import { Items } from '../bDProvicional/productos.json';
import dimensiones from '../images/Dimensiones.svg';
import peso from '../images/peso.svg';
import color from '../images/Color.svg';
import calado from '../images/Calado.svg';
import Ellas from '../images/EllasB.svg';
import Mes from '../images/mesb.svg';
import HyD from '../images/HogarDecoB.svg';
import Office from '../images/OficinaB.svg';
import '../css/Productos.css';


class Productos extends Component{
    constructor() {
        super();
        this.state = {
          bdItems: Items,
          seccion: "",
          seccion2: "", 
          seccion3: "",
          mes:""
            
        }
        
        this.selectSeccion = this.selectSeccion.bind(this); 

        

     }

     selectSeccion(e) {
      const {value} = e.target;
      this.setState({
        seccion: value,
        seccion2: value,
        seccion3: value, 
        mes: value
      
      });
    }; 
    // selectMes(e){
    //   const {value} = e.target
    //   this.setState({
    //     mes: value
    //   })
    // }
   
     
    
render(){
  const FormProducts = this.state.bdItems.map((Item, i) => {
       
    var imagenes =  [Item.image, Item.imageUno, Item.imageDos],
    cont = 0;   
     
    function carrousel(container){
        container.addEventListener('click', e =>{
          let atras = container.querySelector('.atras'),
              adelante = container.querySelector('.adelante'),
              img = container.querySelector('img'),
              tgt = e.target;
  
           if(tgt === atras){
              if(cont > 0){
                img.src = imagenes[ cont - 1];
                cont --;
              } else {
                img.src =  imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
              }
           } else if(tgt === adelante){
            if(cont < imagenes.length - 1){
              img.src = imagenes[ cont + 1];
              cont ++;
            } else {
              img.src =  imagenes[0];
              cont = 0;
            }
           }  
        });
      }
      document.addEventListener("DomContentLoaded",  () => {
        let container = document.getElementById(Item.id);
        carrousel(container);
      });
      let seccion =  [Item.seccion]
      let seccion2 =  [Item.seccion2]
      let seccion3 =  [Item.seccion3]
      let mes = [Item.mes]
      if(  Item.seccion === this.state.seccion
        || Item.seccion2 === this.state.seccion2
        || Item.seccion3 === this.state.seccion3
        || Item.mes === this.state.mes
        
        ){ 

      return (
        
            <div className="productDiv"  key={i}>
                <div className="product">
                    <div className="nombreIt">
                            <p>{Item.nombre}</p>
                    </div>
                    
                    <div className="imgIt">
                      <div className="container" name={Item.ref} id={Item.id}>
                      
                      <div className="atras botones"></div>
                      <div className="adelante botones"></div>
                      <img className="imgProduct" src={Item.image} alt={Item.ref} />
                                          

                    </div>
                                       
                    <div className="infoDiv">        
                    <div className="infoIt"> 
                           {Item.descripcion}
                    </div>
                    <div className="imgInfo">
                    <img src={dimensiones} alt="dimensiones" className="resize"/>
                    <img src={peso} alt="peso" className="resize"/>
                    <img src={color} alt="color" className="resize"/>
                    <img src={calado} alt="calado" className="resize"/>
                    </div>
                          
                         
                              <div className="infoItD"> 
                                  <p className="pIt">La: {Item.largo}</p> 
                                  <p className="pIt">An: {Item.ancho}</p>
                                  <p className="pIt">Al: {Item.alto}</p>cm
                              </div>
                         
                          </div> 
                          <div className="infoItD2">
                          <p className="pIt">{Item.peso} (lb. aprox.)</p>
                          </div>
                          <div className="priceIt">COP 
                          {Item.precio} k
                          </div>
                          <button className="comprar" >
                           add Cesta!                       
                          </button>
                    
                </div>
                
            </div>
        // </div>
      )}
   
        
    });
    
    


    return(
        <div>
          <div >
              <nav className="navSeccion">

              <button
                className="btnSeccionA"
                name="mes"
                value= "si"
                onClick={this.selectSeccion}
                >
                <img src={Mes} alt="Mes" className="btnImg"/>
              Productos del mes
            </button>
            <button
                className="btnSeccion"
                id="ellas"
                name="ellas"
                value= "Ellas"
                onClick={this.selectSeccion}
                >
                <img src={Ellas} alt="calado" className="btnImg"/>
                <p className="btnTxt">Ellas</p>
              
            </button>
            <button
                className="btnSeccion"
                name="hyd"
                value= "hyd"
                onClick={this.selectSeccion}
                >
                <img src={HyD} alt="calado" className="btnImg"/>
              Hogar & Decoracion
            </button>
            <button 
                className="btnSeccion"
                submit
                name="oficina"
                value= "Oficina"
                onClick={this.selectSeccion}
                >
                <img src={Office} alt="calado" className="btnImg"/>
                <p className="btnTxt">Oficina</p>
            </button>
            
            
            </nav>
           
          </div>
          <div className="spaceP">
          {FormProducts}
            
              
          
            </div>
            </div>
          
          
    );
    
  }
  
};  export default Productos;