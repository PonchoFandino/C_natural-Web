import React, { Component } from 'react';

class FormContact extends Component{
    render(){
        return(
            <div>
                <form>
                    <input type="text">Nombre</input>
                    <input type="text"> E-mail</input>
                    <input type="text">Celular</input>
                </form>
            </div>
        )
    }
}export default FormContact;