import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-heading">Arut</h2>
          <p className="footer-text">Your trusted UK-based digital healthcare platform, delivering expert care and virtual consultations nationwide.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li>Home</li>
            <li>Our Doctors</li>
            <li>Specialties</li>
            <li>Book Consultation</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-text"> +44 20 7946 0958</p>
          <p className="footer-text"> support@aruth.com</p>
          <p className="footer-text"> 221B Health Street, London, UK</p>
        </div>

        {/* Social + Newsletter */}
        <div className="footer-socials">
        
          <div className="newsletter">
            <h2 className="footer-text">Subscribe to our newsletter:</h2>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Arut Health, UK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
