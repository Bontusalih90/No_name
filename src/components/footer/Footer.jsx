import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';
import './Footer.css'
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='footer-section'>
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <img src={assets.yourstech}alt="logo" />
            <h4>At Yours Tech, we provide all-in-one Tech Solutions <br />Your Vision Is Our Mission</h4>
          </div>
          <h5> Follow Us</h5>
          <div className="icons">
            <a href=""><FaFacebook className='Fa'/></a>
          
          <a href=""><FaInstagram className='Fa' /></a>
          <a href=""><FaTiktok className='Fa'/> </a>
          <a href=""><FaLinkedin className='Fa'/></a>
          <a href=""><FaTwitter className='Fa' /></a>
          </div>
         
        </div>
        <div className="footer-middle"></div>
        <div className="services">
          <h4>Services</h4>
          <p>Web Development</p>
          <p>App Development</p>
          <p>Web Design </p>
          <p>Digital Solutions</p>
          <p>Business Strategies</p>
        </div>
        <div className="footer-right">
           <h4>Company</h4>
           <p>Blog</p>
           <p>About</p>
           <p>Contact</p>
           <p>Vacancy</p>
           <p>Privacy Policy</p>
           <p>Terms and Conditions</p>

        </div>
      </div>
      <p className='copy'>©2025 YoursTech. All Rights Reserved.</p>
    </div>
  )
}

export default Footer