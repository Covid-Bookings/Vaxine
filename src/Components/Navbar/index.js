import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navbar.css';
import Vaxine from '../../images/vaxine.png';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="mobile"><FaBars /></div>
      <div className="nav-logo-wrapper">
      <Link to='/'>
      <img  className="navbar-logo" src={Vaxine} alt="vaxing logo"/>
      </Link>
      </div>
    </div>
  )
}

export default Navbar;
