import React from 'react';
import '../Dermatologist/Dermatologist.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Doctor from '../Assets/D/Doctor.png';
import  Arjun  from '../Assets/Doctors/Dr. Arjun Patel.png'
import Sneha from '../Assets/Doctors/Dr. Sneha Ramesh.png'
const GeneralPhysician = () => {
  return (
    <div>
      <Navbar />
      <div className="specialty-page">

        <section className="hero-section">
          <h1>Consult with General Physicians</h1>
          <p>Comprehensive care for your general health needs — from colds to chronic conditions.</p>
          <Link to="/consult" className="hero-cta">Book Consultation</Link>
        </section>

<section className="about-section">
  <h2>What We Treat</h2>
  <div className="treatments-grid">
    <div className="treatment-card-circle">
      <p>Cold & Flu Symptoms</p>
    </div>
    <div className="treatment-card-circle">
      <p>Fever & Infections</p>
    </div>
    <div className="treatment-card-circle">
      <p>Body Pain & Headache</p>
    </div>
    <div className="treatment-card-circle">
      <p>Stomach Upset & Acidity</p>
    </div>
  </div>
</section>




      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Select Concern</h3>
            <p>Tell us what issue you’re facing</p>
          </div>
          <div className="step">
            <h3>2. Book Appointment</h3>
            <p>Pick a time that suits you</p>
          </div>
          <div className="step">
            <h3>3. Talk to a Doctor</h3>
            <p>Receive advice and prescription instantly</p>
          </div>
        </div>
      </section>

      <section className="our-doctors">
  <h2>Our General Physicians</h2>
  <div className="doctor-cards">
    <div className="doctor-card">
      <img src={Arjun} alt="Dr. Arjun Patel" />
      <h3>Dr. Arjun Patel</h3>
      <h4>Senior General Physician</h4>
      <p>Expert in diagnosing and treating fever, infections, and routine health conditions.</p>
    </div>
    <div className="doctor-card">
      <img src={Sneha} alt="Dr. Sneha Ramesh" />
      <h3>Dr. Sneha Ramesh</h3>
      <h4>MBBS, Family Medicine</h4>
      <p>Specializes in lifestyle disorders, chronic illness, and preventive healthcare.</p>
    </div>
  </div>
</section>




<section className="why-choose">
        <h2>Why Choose Arut?</h2>
        <ul>
          <li>24/7 General Physician Access</li>
          <li>Secure & Private Consultations</li>
          <li>Affordable Pricing</li>
          <li>Instant e-Prescriptions</li>
        </ul>
      </section>









        <section className="faq-section">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common concerns about general physician consultations</p>
          </div>

          <div className="faq-layout">
            <div className="faq-image">
              <img src={Doctor} alt="Doctor" />
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Can I consult for fever or cold?</h4>
                <p>Yes, general physicians treat all common illnesses like cold, flu, and viral fever.</p>
              </div>
              <div className="faq-item">
                <h4>Can I get prescriptions for lab tests?</h4>
                <p>Yes, the doctor can recommend diagnostic tests based on your symptoms.</p>
              </div>
              <div className="faq-item">
                <h4>Is my consultation recorded?</h4>
                <p>No, your consultations are encrypted and private for your safety.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GeneralPhysician;
