import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navbar.css';
import Vaxine from '../../images/vaxine.png';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="mobile"><FaBars /></div>
      <Link to='/'>
      <img src={Vaxine} />
      </Link>
    </div>
  )
}

export default Navbar;
