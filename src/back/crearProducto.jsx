import React, { Component } from 'react';
// import './FormTareas.css'

class productForm extends Component {
  constructor () {
    super();
    this.state = {
      ref: '',
      descripcion: '',
      peso: '',
      alto: '',
      largo: '',
      ancho:'',
      precio:'',
      imagen:'',
      color:'Color'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddProduct(this.state);
    this.setState({
        ref: '',
        descripcion: '',
        peso: '',
        largo: '',
        alto: '',
        ancho:'',
        precio:'',
        imagen:'',
        color:'Color'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="">
          <div className="">
            <input
              type="text"
              name="ref"
              className=""
              value={this.state.ref}
              onChange={this.handleInputChange}
              placeholder="ref"
              />
          </div>
          <div className="">
            <input
              type="text"
              name="descripcion"
              className=""
              value={this.state.descripcion}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <div className="">
            <input
              type="text"
              name="peso"
              className=""
              value={this.state.peso}
              onChange={this.handleInputChange}
              placeholder="Peso"
              />
          </div>
          <div className="">
            <input
              type="text"
              name="ancho"
              className=""
              value={this.state.ancho}
              onChange={this.handleInputChange}
              placeholder="Ancho"
              />
          </div>
          <div className="">
            <input
              type="text"
              name="largo"
              className=""
              value={this.state.largo}
              onChange={this.handleInputChange}
              placeholder="Largo"
              />
          </div>
          <div className="">
            <input
              type="text"
              name="alto"
              className=""
              value={this.state.alto}
              onChange={this.handleInputChange}
              placeholder="Altura"
              />
          </div>
          <div className="">
            <input
              type="text"
              name="precio"
              className=""
              value={this.state.precio}
              onChange={this.handleInputChange}
              placeholder="Precio"
              />
          </div>
          <div className="">
            <input
              type="file"
              name="imagen"
              className=""
              value={this.state.imagen}
              onChange={this.handleInputChange}
              placeholder="img"
              />
          </div>
          <div className="">
            <select
                name="color"
                className=""
                value={this.state.color}
                onChange={this.handleInputChange}
              >
              <option>Color</option>
              <option>Vino</option>
              <option>Cafe</option>
              <option>Chocolate</option>
            </select>
          </div>
          <button type="submit" className="">
            Crear Ref
          </button>
        </form>
      </div>
    )
  }

}

export default productForm;