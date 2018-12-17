import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
// import Dashboard from './components/dashboard';




class App extends Component {
  
  render() {
    return (
      <div className="contenedor">
        <Nav/>
        {/* <Dashboard/> */}
      </div>
      
    );
  }
}

export default App;
