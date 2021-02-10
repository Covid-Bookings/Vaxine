import React from 'react';
import './navbar.css';
import Vaxine from '../../images/vaxine.png';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  return (
    //image will be clickable and return the home route
    <div className="navbar container">
      <div className="mobile"><FaBars /></div>
      <img src={Vaxine} />
      {/* <h1> This is the Navbar Component</h1> */}
    </div>
  )
}

export default Navbar;
