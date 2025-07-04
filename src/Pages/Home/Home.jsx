import React from "react";
import Navbar from "../Navbar/Navbar";
import Life from "../Life/Life";
import Specialties from "../Specialties/Specialties";
import Research from "../Research/Research";
import { Link } from "react-router-dom";
import './Home.css'
import AI from "../AI/AI";

const Home = () => {
    return(
        <div>
             <Navbar/>
              <section className="hero-section-home">
  <h1>Your Trusted Virtual Healthcare Partner</h1>
  <p>Access top medical experts across the UK from the comfort of your home — fast, secure, and affordable.</p>
  <Link to="/consult" className="hero-cta-home">Start Your Consultation</Link>
</section>

             <Life/>
             <Specialties/>
             <Research/>
             <AI/>
             
        </div>
    )
}

export default Home;