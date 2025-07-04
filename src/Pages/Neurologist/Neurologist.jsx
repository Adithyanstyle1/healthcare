import React from 'react';
import '../Dermatologist/Dermatologist.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Doctor from '../Assets/D/Doctor.png'
import { Link } from 'react-router-dom';
import James from '../Assets/Doctors/Dr. James Whitmore.png'
import  Amelia from '../Assets/Doctors/Dr. Amelia Hart.png'
const Neurologist = () => {
  return (
    <div>
      <Navbar />


           <section className="hero-section">
  <h1>Expert Neurology Consultation</h1>
  <p>Get specialized care for headaches, seizures, memory loss, and more – from certified neurologists.</p>
  <Link to="/consult" className="hero-cta">Book Consultation</Link>
</section>
  


<section className="about-section">
  <h2>What We Treat</h2>
  <div className="treatments-grid">
    <div className="treatment-card-circle">
      <p>Headaches & Migraines</p>
    </div>
    <div className="treatment-card-circle">
      <p>Seizures & Epilepsy</p>
    </div>
    <div className="treatment-card-circle">
      <p>Memory Loss & Dementia</p>
    </div>
    <div className="treatment-card-circle">
      <p>Parkinson’s & Tremors</p>
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
  <h2>Our Neurologists</h2>
  <div className="doctor-cards">
    <div className="doctor-card">
      <img src={James} alt="Dr. James Whitmore" />
      <h3>Dr. James Whitmore</h3>
      <h4>Consultant Neurologist</h4>
      <p>Specialist in epilepsy, Parkinson’s disease, and advanced neuro-diagnostics.</p>
    </div>
    <div className="doctor-card">
      <img src={ Amelia} alt="Dr. Amelia Hart" />
      <h3>Dr. Amelia Hart</h3>
      <h4>Senior Neurology Consultant</h4>
      <p>Focused on migraines, MS, and neurological rehabilitation for UK patients.</p>
    </div>
  </div>
</section>

<section className="why-choose">
        <h2>Why Choose Arut?</h2>
        <ul>
          <li>24/7 Neurologist Access</li>
          <li>Secure & Private Consultations</li>
          <li>Affordable Pricing</li>
          <li>Instant e-Prescriptions</li>
        </ul>
      </section>

       <section className="faq-section">
  <div className="faq-header">
    <h2>Frequently Asked Questions</h2>
    <p>Answers to common concerns about neurology consultations</p>
  </div>

  <div className="faq-layout">
    <div className="faq-image">
      <img src={Doctor} alt="Doctor" />
    </div>
    <div className="faq-grid">
      <div className="faq-item">
        <h4>Can I consult for frequent headaches or migraines?</h4>
        <p>Yes, neurologists diagnose and treat conditions like migraines, cluster headaches, and tension headaches.</p>
      </div>
      <div className="faq-item">
        <h4>Do I need to bring previous scan reports?</h4>
        <p>Bringing MRI, CT, or EEG reports helps the neurologist understand your condition better.</p>
      </div>
      <div className="faq-item">
        <h4>Can I consult for sleep and memory issues?</h4>
        <p>Yes, neurologists help manage conditions like insomnia, dementia, and memory loss.</p>
      </div>
    </div>
  </div>
</section>

      




      <Footer />
    </div>
  );
};

export default Neurologist;
