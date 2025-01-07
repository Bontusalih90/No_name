import React from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
    document.body.classList.toggle('no-scroll'); // Prevent body scrolling
  }

  return (
    <div className='navbar-container'>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav ref={navRef}>
        <ul className="navbar-menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li> {/* Link to the Projects page */}
        <li><NavLink to="/contact">Contact</NavLink></li>
          <button onClick={showNavbar} className='nav-btn nav-close-btn'><FaTimes /></button>
        </ul>
      </nav>
      <button onClick={showNavbar} className='nav-btn'><FaBars /></button>
    </div>
  );
}

export default Navbar;
