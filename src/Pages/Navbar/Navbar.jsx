import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownClick = () => {
    if (isMobile) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Arut</Link>
      </div>

      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>

      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>

        {/* Specialties Dropdown */}
        <li
          className={`dropdown ${dropdownOpen ? 'open' : ''}`}
          onClick={handleDropdownClick}
          onMouseEnter={() => !isMobile && setDropdownOpen(true)}
          onMouseLeave={() => !isMobile && setDropdownOpen(false)}
        >
          <span className="dropdown-title">Specialties</span>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show-dropdown' : ''}`}>
            <li><Link to="/specialties/general-physician">General Physician</Link></li>
            <li><Link to="/specialties/cardiologist">Cardiologist</Link></li>
            <li><Link to="/specialties/neurologist">Neurologist</Link></li>
            <li><Link to="/specialties/dermatologist">Dermatologist</Link></li>
          </ul>
        </li>

        <li><Link to="/consult">Consult Now</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-auth">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
