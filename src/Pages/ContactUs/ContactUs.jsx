import React from 'react';
import './ContactUs.css';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar/>
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have questions, suggestions, or need help — reach out to our team.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: support@aruth.com</p>
          <p>Phone: +44 20 7946 0958</p>
          <p>Location: 221B Health Street, London, UK</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
