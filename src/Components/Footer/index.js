import React from 'react'
import './footer.css'
import Vaxine from '../../images/vaxine.png';

const Footer = () => {
  return (
    <>
    <div className="testingyo">
  <div className="footer-wrapper">
    <div className='footer container'>
      <p id="footerTitle">A cure in your city</p>
      <div className="vaccine-wrapper" >
        <img className="vaxine-logo" src={Vaxine} alt="vaxine name logo"/>
      </div>
      <div>
        <p className="footer-list">Terms of Service</p>
        <p className="footer-list">Privacy Policy</p>
        <p id="copyright">Copyright @2020 Vaxine</p>
      </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Footer;
