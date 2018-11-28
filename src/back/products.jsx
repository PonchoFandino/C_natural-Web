import React, { Component } from 'react';
import '../css/tienda.css';
import { Items } from '../bDProvicional/productos.json';
import dimensiones from '../images/resize.svg'
import '../css/Productos.css'


class Productos extends Component{
    constructor() {
        super();
        this.state = {
          bdItems: Items
         
        }
     }

  
render(){
    const productos = this.state.bdItems.map((Item, i) => {
      return (
        <div >
            <div className="productDivA"  key={i}>
                <div className="productA">
                    
                    <div className="imgItA">
                      <img className="imgProductA" src={Item.image} alt={Item.ref} />
                    </div >
                      <div className="fondoInfo"></div>
                          <div className="infoItA"> 
                           {Item.descripcion}
                          </div>
                          
                          <div className="priceItA">COP
                          {Item.precio} k
                          </div>
                          <button  className="masInfo" >
                             +info                      
                          </button>
                          <button className="comprarA" >
                             Add Cesta!                      
                          </button>
                    
                </div>
                
            </div>
        </div>
      )
    });
    const MoreInfo = this.state.bdItems.map((Item, i) => {
      return (
        <div className="moreInfo">
            <div className="productDiv"  key={i}>
                <div className="product">
                    
                    <div className="imgIt">
                      <img className="imgProduct" src={Item.image} alt={Item.ref} />
                    </div>
                   
                          <div className="nombreIt">
                            <h4>{Item.ref}</h4>
                          </div>
                          <div className="infoIt"> 
                           {Item.descripcion}
                          </div>
                          <div className="infoItD"> <img src={dimensiones} alt="dimensiones" className="resize"/>
                          <p className="pIt">Largo: {Item.largo}(cm)</p> 
                          </div>
                          <div className="infoItD">
                          <p className="pIt">Ancho: {Item.ancho}(cm)</p>
                          </div>
                          <div className="infoItD">
                          <p className="pIt">Peso: {Item.peso} (lb. aprox.)</p>
                          </div>
                          <div className="priceIt">COP 
                          {Item.precio} k
                          </div>
                          <button className="comprar" >
                           add Cesta!                       
                          </button>
                    
                </div>
                
            </div>
        </div>
      )
    });
    


    return(
        
          <div className="">
          {/* {this.state.Items? */}
            {productos}
            {/* : */}
            <div>
              {MoreInfo}

            </div>
            {/* } */}
          </div>
          
    );
  }
};  export default Productos;