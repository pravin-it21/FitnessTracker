import React, { useState } from 'react';
import anime from 'animejs';
import './signup.css';

function SignUp() {
  const [current, setCurrent] = useState(null);

  const handleFocus = (offset) => {
    if (current) current.pause();
    setCurrent(
      anime({
        targets: 'path',
        strokeDashoffset: {
          value: offset,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      })
    );
  };

  // signup.js
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      password: document.getElementById('password').value,
    }),
  });

  const data = await response.json();
  if (response.ok) {
    alert('Registration successful');
    window.location.href = '/login';
  } else {
    alert(data.error || 'Registration failed');
  }
};


  const redirectToLogin = () => {
    window.location.href = '/login';
  };



  return (
    <div className="signup-page">
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
                <stop style={{ stopColor: '#D10000' }} offset="0" />
                <stop style={{ stopColor: '#fd9b07' }} offset="1" />
              </linearGradient>
            </defs>
            <path
              d="m 40 120.0002 l 239.9998 -0.0003 c 0 0 24.9926 0.7993 25.0002 35.0002 c 0.008 34.2008 -25.0002 35 -25.0002 35 h -239.9998 c 0 -0.0205 -25 4.0135 -25 38.5 c 0 34.4865 25 38.5 25 38.5 h 242 Q 304 270 303 300 Q 304 331 286 337 H 40"
            />
          </svg>

          
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" onFocus={() => handleFocus(0)} />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onFocus={() => handleFocus(-336)} />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" onFocus={() => handleFocus(-673)} />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" onFocus={() => handleFocus(-1008)} />

              <a href="#"><input type="submit" id="submit" value="Submit" /></a>
              <div className="dir-login" onClick={redirectToLogin}>
                <p>Already a User? Login</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
