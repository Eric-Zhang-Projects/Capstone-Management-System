import React, { Component } from 'react';
import Home from './Pages/Home/Home.js';
import Header from './components/Header/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Home></Home>
      </div>
    );
  }
}


export default App;
