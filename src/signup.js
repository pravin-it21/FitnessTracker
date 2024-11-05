import React from 'react';
import './signup.css';

const SignUpForm = () => {
  const handleRedirectToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="login">Sign Up</div>
          <div className="eula">
            By logging in you agree to the ridiculously long terms that you didn't bother to read
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 500">
            <defs>
              <linearGradient id="linearGradient" x1="13" y1="193.5" x2="307" y2="193.5">
                <stop offset="0" style={{ stopColor: '#D10000' }} />
                <stop offset="1" style={{ stopColor: '#fd9b07' }} />
              </linearGradient>
            </defs>
            <path d="m 40 120.0002 l 239.9998 -0.0003 c 0 0 24.9926 0.7993 25.0002 35.0002 c 0.008 34.2008 -25.0002 35 -25.0002 35 h -239.9998 c 0 -0.0205 -25 4.0135 -25 38.5 c 0 34.4865 25 38.5 25 38.5 h 242 Q 304 270 303 300 Q 304 331 286 337 H 40" />
          </svg>
          <div className="form">
            <form action="/register" method="POST">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
              
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
              
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
              
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
              
              <button type="submit" className="submit-button">Submit</button>
              <div className="dir-login" onClick={handleRedirectToLogin}>
                <p>Already a User? Login</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
