import React from 'react';
import './AboutUs.css';
import aboutImg from '../Assets/about-customer.png'; // Make sure this path is correct
import { FaClock, FaUserMd, FaShieldAlt, FaBolt } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';


const features = [
  {
    icon: <FaClock />,
    title: '24/7 Access',
    desc: 'Healthcare doesn’t wait. We’re here round-the-clock, providing consultations any time you need help.',
  },
  {
    icon: <FaUserMd />,
    title: 'Certified Doctors',
    desc: 'Our platform connects you only with verified and experienced medical professionals across specialties.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Data Privacy',
    desc: 'We follow strict privacy protocols. Your health data is always safe, secure, and never shared without consent.',
  },
  { 
    icon: <FaBolt />,
    title: 'Fast Consultation',
    desc: 'Quick access to healthcare. Get connected with a doctor in minutes for fast, reliable support.',
  },
];


const teamMembers = [
  {
    name: "Dr. Emily Watson",
    role: "Family Medicine Specialist",
    img: "https://images.pexels.com/photos/8460154/pexels-photo-8460154.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Experienced in holistic care and preventive health. Emily brings a compassionate approach to online consultations.",
  },
  {
    name: "Dr. James Bennett",
    role: "Consultant Cardiologist",
    img: "https://images.pexels.com/photos/8376293/pexels-photo-8376293.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Expert in cardiac care and lifestyle management. Committed to making heart health accessible worldwide.",
  },
  {
    name: "Dr. Arulmozhi R",
    role: "Senior Neurologist",
    img: "https://images.pexels.com/photos/6749776/pexels-photo-6749776.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Focused on neurotherapy and digital diagnostics. Fluent in Tamil and English to serve diverse patients.",
  },
  {
    name: "Dr. Keerthivasan M",
    role: "Consultant Dermatologist",
    img: "https://images.pexels.com/photos/8376290/pexels-photo-8376290.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Skincare and wellness expert with modern, result-oriented treatments tailored to individual needs.",
  },
];


const AboutUs = () => {
  return (
    <div> 
      <Navbar/>
    <div className="about-us-page">

      {/* Section 1: Who we are */}
     <div className="who-we-are">
  <h2 className="section-heading-centered">Who we are?</h2>
  <p>
    <strong>Arut</strong> is your digital health partner, making expert medical care easily accessible from anywhere.
    We are driven by technology and compassion to deliver personalized healthcare services through a secure online platform.
  </p>
  <p>
    Our certified doctors and specialists are available 24/7 to ensure timely advice, prescriptions, and follow-ups —
    all from the comfort of your home. We believe in simplifying healthcare and empowering people to take charge of their well-being.
  </p>
</div>


      {/* Section 2: Customer Experience */}
      <section className="customer-experience">
        <h2>Customer Experience</h2>
        <div className="experience-content">
          <div className="experience-image">
            <img src={aboutImg} alt="Customer Experience" />
          </div>
          <div className="experience-text">
            <p>
              Patients love how intuitive and smooth the Arut platform is. From instant bookings to real-time consultations,
              the process is designed to be stress-free and secure. Arut offers quick access to medical records, prescriptions,
              and personalized health plans.
              <br /><br />
              Our users particularly appreciate the user-friendly dashboard, AI-assisted doctor suggestions, and
              on-demand support via chat and email. Every aspect of the platform is optimized for convenience,
              helping you focus more on your health and less on logistics.
              <br /><br />
              
            </p>
          </div>
        </div>
      </section>


      <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <p className="team-subtitle">A dedicated group of certified professionals transforming online healthcare.</p>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.desc}</p>
          </div>
        ))}
      </div>
    </section>




    <section className="why-choose-section">
      <h2 className="choose-title">Why Choose Us?</h2>
      <div className="choose-grid">
        {features.map((feature, index) => (
          <div key={index} className="choose-card">
            <div className="choose-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="health-banner">
      <div className="health-banner-content">
        <h2>Celebrate Healthy Life with Us</h2>
        <p>
          Join our journey toward wellness. At <strong>Arut</strong>, we believe every step you take toward health should be supported, celebrated, and simplified.  
        </p>
      </div>
    </section>
 
     




    </div>
    </div>
  );
};

export default AboutUs;
