// Dermatologist.jsx
import React from 'react';
import './Dermatologist.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Keerth from '../Assets/Doctors/Dr. Keerthivasan.png'
import Doctor from '../Assets/D/Doctor.png'
import Priya from '../Assets/Doctors/Dr. Priya Mehta.png'

const dermatologists = [
  {
    name: 'Dr. Keerthivasan M',
    role: 'Consultant Dermatologist',
    desc: 'Specializes in skincare and modern treatments.',
    img: Keerth,
  },
  {
    name: 'Dr. Priya Mehta',
    role: 'Senior Dermatologist',
    desc: 'Focuses on acne, pigmentation and cosmetic dermatology.',
    img: Priya,
  },
];

const Dermatologist = () => {
  return (
    <div>
     <Navbar/>
    
    <div className="dermatologist-page">

      <section className="hero-section">
        <h1>Expert Dermatology Consultation</h1>
        <p>Skin, hair, and nail care by certified dermatologists – anytime, anywhere.</p>
        <Link to="/consult" className="hero-cta">Book Consultation</Link>
      </section>
<section className="about-section">
  <h2>What We Treat</h2>
  <div className="treatments-grid">
    <div className="treatment-card-circle">
      <p>Acne & Pimples</p>
    </div>
    <div className="treatment-card-circle">
      <p>Hair Fall & Dandruff</p>
    </div>
    <div className="treatment-card-circle">
      <p>Dark Circles & Pigmentation</p>
    </div>
    <div className="treatment-card-circle">
      <p>Allergies & Eczema</p>
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
        <h2>Our Dermatologists</h2>
        <div className="doctor-cards">
          {dermatologists.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.img} alt={doc.name} />
              <h3>{doc.name}</h3>
              <h4>{doc.role}</h4>
              <p>{doc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Arut?</h2>
        <ul>
          <li>24/7 Dermatologist Access</li>
          <li>Secure & Private Consultations</li>
          <li>Affordable Pricing</li>
          <li>Instant e-Prescriptions</li>
        </ul>
      </section>
<section className="faq-section">
  {/* 1st Div - Title on Top */}
  <div className="faq-header">
    <h2>Frequently Asked Questions</h2>
    <p>Answers to common concerns about dermatology consultations</p>
  </div>

  {/* 2nd & 3rd Div - Row Layout */}
  <div className="faq-layout">
    {/* 2nd Div - Doctor Image on Left */}
    <div className="faq-image">
      <img src={Doctor} alt="Doctor" />
    </div>

    {/* 3rd Div - FAQ Content on Right */}
    <div className="faq-grid">
      <div className="faq-item">
        <h4>Can I send skin photos to the doctor?</h4>
        <p>Yes, you can upload images securely during your consultation.</p>
      </div>
      <div className="faq-item">
        <h4>Is my consultation private?</h4>
        <p>Absolutely. All sessions are encrypted and private.</p>
      </div>
      <div className="faq-item">
        <h4>How soon will I get my prescription?</h4>
        <p>Prescriptions are issued right after the consultation ends.</p>
      </div>
    </div>
  </div>
</section>


    </div>
    </div>
  );
};

export default Dermatologist;
