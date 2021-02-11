import React from 'react'
import './footer.css'
import Vaxine from '../../images/vaxine.png';

const Footer = () => {
  return (
  <div className="footer-wrapper">
    <div className='footer container'>
      <p id="footerTitle">A cure in your city</p>
      <img src={Vaxine} alt="vaxine name logo"/>
      <div className="footer-list">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p id="copyright">Copyright @2020 Vxine</p>
      </div>
    </div>
   </div>
  )
}

export default Footer;
