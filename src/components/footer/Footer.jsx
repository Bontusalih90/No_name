import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';
import './Footer.css'
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='footer-section'>
      <div className="footer-content">
        <div className="footer-left">
          
            <img src={assets.yourstech}alt="logo" />
            <h4>At YoursTech, we provide all-in-one Tech Solutions <br />Your Vision Is Our Mission</h4>
          
          
          <div className="icons">
          <h5> Follow Us</h5>
          <a href=""><FaFacebook className='Fa'/></a>
          <a href=""><FaInstagram className='Fa' /></a>
          <a href=""><FaTiktok className='Fa'/> </a>
          <a href=""><FaLinkedin className='Fa'/></a>
          <a href=""><FaTwitter className='Fa' /></a>
          </div>
         
        </div>
        <div className="footer-middle">
        <div className="services">
          <h4>Services</h4>
          <p>Web Development</p>
          <p>App Development</p>
          <p>Web Design </p>
          <p>Digital Marketing Solutions</p>
          <p>Business Strategies</p>
        </div>
        </div>
      </div>
      
      <p className='copy'>©2025 YoursTech. All Rights Reserved.</p>
    </div>
  )
}

export default Footer