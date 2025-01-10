import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { assets } from "../../assets/assets";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closemenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = scrolled
    ? "sticky-main-nav scrolled"
    : "sticky-main-nav";


  return (
    <nav id="main-nav" className={navbarClasses}>
    <div className="container">
      <NavLink to="/" onClick={closemenu}>
        <img
          src={assets.yourstech}
          alt="CyberNest"
          className={`logo ${menuOpen ? "logo-center" : ""}`}
        />
      </NavLink>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "Current" : "half-header-link"
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "Current" : "half-header-link"
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "Current" : "half-header-link"
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "contact-current" : "half-header-link"
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "Current" : "half-header-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "Current" : "half-header-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "Current" : "half-header-link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "contact-current" : "half-header-link"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
