import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import RutgersLogo from '../../images/rutgerslogo.png';
import './headerstyles.css';
import {  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import Register from '../../Pages/Register/Register.js';


export default class Header extends Component {
    render() {
        return (
          <Router>
<Navbar bg="dark" expand="md">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <img src = {RutgersLogo} alt="logo" className = "logo"/>
      <Nav.Link href="../Login/Login.js">Login</Nav.Link>
      <Link to="/register">Register</Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Switch>
  <Route path = "/register">
    <Register />
  </Route>
</Switch>
</Router>
        );
    }
}