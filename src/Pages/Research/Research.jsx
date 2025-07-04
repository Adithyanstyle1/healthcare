import React from 'react';
import './Research.css';
import AI from '../Assets/H/AI.png'
import Data from '../Assets/H/Data.png'
import Diag from '../Assets/H/Diag.png'
const researchList = [
  {
    title: "AI-Based Early Diagnosis for Cardiac Patients",
    summary:
      "Our machine learning model helps detect early signs of heart disease through symptom-based input and ECG analysis.",
    image: AI,
  },
  {
    title: "Improving Mental Health with Remote CBT Tools",
    summary:
      "We are studying the impact of digital cognitive behavioral therapy on patients suffering from anxiety and depression.",
    image:Diag,
  },
  {
    title: "Securing Patient Data with Blockchain",
    summary:
      "We research decentralized record keeping using blockchain to ensure data integrity and prevent medical fraud.",
    image:Data,
  },
];

const Research = () => {
  return (
    <section className="research-section">
      <div className="research-container">
        <h2 className="research-title">Our Research & Innovation</h2>
        <p className="research-subtitle">
          We’re continuously exploring advanced healthcare technologies to serve you better.
        </p>

        <div className="research-grid">
          {researchList.map((item, index) => (
            <div className="research-card" key={index}>
              <img src={item.image} alt={item.title} className="research-img" />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <a href="#!" className="read-more">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
