import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // only for mobile

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

        {/* ✅ Fully CSS based dropdown (no JS) */}
        <li className="dropdown">
          <span className="dropdown-title">Specialties</span>
          <ul className="dropdown-menu">
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
