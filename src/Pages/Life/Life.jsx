import React from 'react';
import './Life.css';
import ArutVideo from '../Assets/Arut-video.mp4'; // update if needed

const Life = () => {
  return (
    <section className="healthy-life-section">
      <div className="healthy-life-container">

        {/* Title above both boxes */}
        <h2 className="main-title">
          Enjoy the Healthy Life with <span>Arut</span>
        </h2>

        <div className="video-and-content">

          {/* LEFT: Content */}
          <div className="content-left">
            <p>
              Arut connects you with verified healthcare professionals from the comfort of your home.
              Get expert medical advice, prescriptions, and follow-ups — 100% online, secure and simple.
            </p>
            <p>
              Our platform is built to give you 24/7 access to certified doctors, personalized treatment plans,
              and mental wellness support—right from your device.
            </p>
            <p>
              Whether it’s a routine check-up or a specialist consultation, Arut makes quality healthcare
              more accessible and affordable than ever before.
            </p>
            <a href="/consult" className="consult-btn">Start Consulting</a>
          </div>

          {/* RIGHT: Video */}
          <div className="video-box">
            <video
              src={ArutVideo}
              autoPlay
              muted
              loop
              playsInline
              className="custom-video"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Life;
