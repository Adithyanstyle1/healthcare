import React, { useState } from 'react';
import './LoginSignUp.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
          <p>{isSignUp ? 'Sign up to start consulting' : 'Login to your account'}</p>

          <form className="login-form">
            {isSignUp && (
              <>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
              </>
            )}

            {!isSignUp && (
              <>
                <input type="email" placeholder="Email" required />
              </>
            )}

            <input type="password" placeholder="Password" required />

            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          </form>

          <div className="toggle-text">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span onClick={() => setIsSignUp(false)}>Login</span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setIsSignUp(true)}>Sign Up</span>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignUp;
