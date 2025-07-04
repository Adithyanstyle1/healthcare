import React from 'react';
import './Specialties.css';
import { FaUserMd, FaHeartbeat, FaBrain, FaAllergies } from 'react-icons/fa';
const specialties = [
  {
    title: "General Physician",
    desc: "Consult for fever, infections, and general health concerns.",
    icon: <FaUserMd className="specialty-icon" />,
  },
  {
    title: "Cardiologist",
    desc: "Heart check-ups, ECG reviews, and cholesterol management.",
    icon: <FaHeartbeat className="specialty-icon" />,
  },
  {
    title: "Neurologist",
    desc: "Care for migraines, seizures, and nervous system disorders.",
    icon: <FaBrain className="specialty-icon" />,
  },
  {
    title: "Dermatologist",
    desc: "Skin, hair, and nail treatment by certified experts.",
    icon: <FaAllergies className="specialty-icon" />,
  },
];

const Specialties = () => {
  return (

    <div>
      
      
    <section className="specialties-section">
      <div className="specialties-container">
        <h2 className="section-title">Our Specialties</h2>

        <div className="specialties-grid">
          {specialties.map((spec, index) => (
            <div className="specialty-card" key={index}>
              {spec.icon}
              <h3>{spec.title}</h3>
              <p>{spec.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Specialties;
