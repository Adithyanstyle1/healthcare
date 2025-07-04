import React from 'react';
import './ConsultNow.css';
import Navbar from '../Navbar/Navbar';

const ConsultNow = () => {
  return (
    <div>
      <Navbar/>
    <section className="consult-now-section">
      <div className="consult-now-container">
        <h2>Start Your Online Consultation</h2>
        <p>Get expert medical advice from certified doctors anytime, anywhere. Just fill out the form and we’ll connect you with the right specialist.</p>

        <form className="consult-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <select>
            <option>Select Specialty</option>
            <option>General Physician</option>
            <option>Cardiologist</option>
            <option>Neurologist</option>
            <option>Dermatologist</option>
          </select>
          <textarea placeholder="Describe your issue..." rows="5"></textarea>
          <button type="submit">Book Consultation</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default ConsultNow;