// login.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import anime from 'animejs';
import './login.css';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Use useRef for inputs and button
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const submitButton = useRef(null);

  useEffect(() => {
    let current = null;

    const animatePath = (offsetValue) => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: offsetValue,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    };

    // Using refs to add event listeners
    emailInput.current?.addEventListener('focus', () => animatePath(0));
    passwordInput.current?.addEventListener('focus', () => animatePath(-336));
    submitButton.current?.addEventListener('focus', () => animatePath(-730));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredUsername = emailInput.current.value;
    const enteredPassword = passwordInput.current.value;

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: enteredUsername,
          password: enteredPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Store token in local storage
        localStorage.setItem('username', enteredUsername); // Store username in local storage
        onLogin(); // Trigger onLogin function to update authentication state
        navigate('/dashboard'); // Redirect to the dashboard page
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="left">
          <div className="typewriter" style={{ marginTop: '10px', paddingLeft: '40px' }}>
            <h1 style={{ fontSize: '40px' }}>LOGIN</h1>
          </div>
          <div className="eula">
            <img
              src="https://i.ibb.co/qBDnzVZ/6339889.jpg"
              alt="Logo"
              style={{ width: '200px', marginTop: '-40px', paddingLeft: '25px' }}
            />
          </div>
        </div>
        <div className="right">
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient id="linearGradient" x1="13" y1="193.5" x2="307" y2="193.5" gradientUnits="userSpaceOnUse">
                <stop style={{ stopColor: '#D10000' }} offset="0" />
                <stop style={{ stopColor: '#fd9b07' }} offset="1" />
              </linearGradient>
            </defs>
            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </svg>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email">Username</label>
            <input ref={emailInput} type="text" id="email" name="username" placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input ref={passwordInput} type="password" id="password" name="password" placeholder="Password" />
            <input ref={submitButton} type="submit" id="submit" value="Submit" />
            <label style={{ marginLeft: '30px' }}>
              New user? <a href="/register" style={{ color: '#707075' }}>Create Account</a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
