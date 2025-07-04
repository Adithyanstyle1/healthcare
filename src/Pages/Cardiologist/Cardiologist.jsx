import React from 'react';
import '../Dermatologist/Dermatologist.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Doctor from '../Assets/D/Doctor.png'
import { Link } from 'react-router-dom';
import Ramesh from '../Assets/Doctors/Dr. Ramesh Srinivasan.png'
import Emily from '../Assets/Doctors/Dr. Emily Clarke.png'
const Cardiologist = () => {
  return (
    <div>
      <Navbar />

      <section className="hero-section">
  <h1>Expert Cardiology Consultation</h1>
  <p>Heart care by certified cardiologists – for chest pain, blood pressure, and more.</p>
  <Link to="/consult" className="hero-cta">Book Consultation</Link>
</section>

<section className="about-section">
  <h2>What We Treat</h2>
  <div className="treatments-grid">
    <div className="treatment-card-circle">
      <p>High Blood Pressure</p>
    </div>
    <div className="treatment-card-circle">
      <p>Chest Pain & Angina</p>
    </div>
    <div className="treatment-card-circle">
      <p>Irregular Heartbeats</p>
    </div>
    <div className="treatment-card-circle">
      <p>Heart Failure Symptoms</p>
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
  <h2>Our Cardiologists</h2>
  <div className="doctor-cards">
    {/* Indian Cardiologist */}
    <div className="doctor-card">
      <img
        src={Ramesh}
        alt="Dr. Ramesh Srinivasan"
      />
      <h3>Dr. Ramesh Srinivasan</h3>
      <h4>Senior Cardiologist (India)</h4>
      <p>Renowned for treating heart rhythm disorders, hypertension, and preventive cardiology in India.</p>
    </div>

    {/* UK Cardiologist */}
    <div className="doctor-card">
      <img
        src={Emily}
        alt="Dr. Emily Clarke"
      />
      <h3>Dr. Emily Clarke</h3>
      <h4>Consultant Cardiologist (UK)</h4>
      <p>Specializes in heart failure management, echocardiography, and interventional procedures in the UK.</p>
    </div>
  </div>
</section>

<section className="why-choose">
        <h2>Why Choose Arut?</h2>
        <ul>
          <li>24/7 Cardiologist Access</li>
          <li>Secure & Private Consultations</li>
          <li>Affordable Pricing</li>
          <li>Instant e-Prescriptions</li>
        </ul>
      </section>




      <section className="faq-section">
  <div className="faq-header">
    <h2>Frequently Asked Questions</h2>
    <p>Answers to common concerns about cardiology consultations</p>
  </div>

  <div className="faq-layout">
    <div className="faq-image">
      <img src={Doctor} alt="Doctor" />
    </div>
    <div className="faq-grid">
      <div className="faq-item">
        <h4>Can I consult for chest pain?</h4>
        <p>Yes, cardiologists help diagnose and manage chest discomfort and related symptoms.</p>
      </div>
      <div className="faq-item">
        <h4>Do I need tests like ECG or Echo?</h4>
        <p>The cardiologist may suggest ECG, Echo, or TMT based on your heart health condition.</p>
      </div>
      <div className="faq-item">
        <h4>Are follow-ups available after consultation?</h4>
        <p>Yes, follow-up consultations can be scheduled to review progress or test results.</p>
      </div>
    </div>
  </div>
</section>



      
      






      <Footer />
    </div>
  );
};

export default Cardiologist;
