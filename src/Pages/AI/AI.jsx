import React, { useState } from 'react';
import './AI.css';
import aiImage from '../Assets/A/AI-Img.png'

const symptomResponses = {
  headache: 'Possible causes: Dehydration, Migraine, or Stress.',
  fever: 'Likely causes: Viral infection or Flu.',
  cough: 'Could indicate: Cold, Allergies, or Asthma.',
  tired: 'Might be due to: Fatigue, Poor sleep, or Iron deficiency.',
};

const AI = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowerInput = input.toLowerCase();
    const result = Object.keys(symptomResponses).find(key =>
      lowerInput.includes(key)
    );
    setResponse(
      result
        ? symptomResponses[result]
        : 'Sorry, we couldn’t detect the issue. Please consult a doctor for accurate advice.'
    );
  };

  return (
    <section className="ai-assistant-section">
      <div className="ai-content">
        <div className="ai-left">
          <h2>AI Health Assistant</h2>
          <p>
            Get instant insights from our smart assistant. Enter a symptom and receive a quick health analysis powered by AI.
          </p>
          <form onSubmit={handleSubmit} className="ai-form">
            <input
              type="text"
              placeholder="Describe your symptom..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Analyze</button>
          </form>
          {response && (
            <div className="ai-response">
              {response} <br />
              <a href="/consult">Need expert help? Book a consultation →</a>
            </div>
          )}
        </div>
        <div className="ai-right">
          <img src={aiImage} alt="AI Medical Assistant" />
        </div>
      </div>
    </section>
  );
};

export default AI;
