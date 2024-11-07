// import React, { useEffect } from 'react';
// import anime from 'animejs';
// import './login.css'; // Create a separate CSS file for modular styling if necessary

// const LoginForm = ({ onLogin }) => { // Accept onLogin prop
//   useEffect(() => {
//     const emailInput = document.querySelector('#email');
//     const passwordInput = document.querySelector('#password');
//     const submitButton = document.querySelector('#submit');
//     let current = null;

//     const animatePath = (offsetValue) => {
//       if (current) current.pause();
//       current = anime({
//         targets: 'path',
//         strokeDashoffset: {
//           value: offsetValue,
//           duration: 700,
//           easing: 'easeOutQuart',
//         },
//         strokeDasharray: {
//           value: '240 1386',
//           duration: 700,
//           easing: 'easeOutQuart',
//         },
//       });
//     };

//     emailInput.addEventListener('focus', () => animatePath(0));
//     passwordInput.addEventListener('focus', () => animatePath(-336));
//     submitButton.addEventListener('focus', () => animatePath(-730));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     // Call the onLogin function to set authenticated state in App
//     onLogin();
//   };

//   return (
//     <div className="page">
//       <div className="container">
//         <div className="left">
//           <div className="typewriter" style={{ marginTop: '10px', paddingLeft: '40px' }}>
//             <h1 style={{ fontSize: '40px' }}>LOGIN</h1>
//           </div>
//           <div className="eula">
//             <img
//               src="https://i.ibb.co/qBDnzVZ/6339889.jpg"
//               alt="Logo"
//               style={{ width: '200px', marginTop: '-40px', paddingLeft: '25px' }}
//             />
//           </div>
//         </div>
//         <div className="right">
//           <svg viewBox="0 0 320 300">
//             <defs>
//               <linearGradient id="linearGradient" x1="13" y1="193.5" x2="307" y2="193.5" gradientUnits="userSpaceOnUse">
//                 <stop style={{ stopColor: '#D10000' }} offset="0" />
//                 <stop style={{ stopColor: '#fd9b07' }} offset="1" />
//               </linearGradient>
//             </defs>
//             <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
//           </svg>
//           <form onSubmit={handleSubmit} className="form"> {/* Attach onSubmit handler */}
//             <label htmlFor="email">Username</label>
//             <input type="text" id="email" name="username" placeholder="Username" />
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" name="password" placeholder="Password" />
//             <input type="submit" id="submit" value="Submit" />
//             <label style={{ marginLeft: '30px' }}>
//               New user? <a href="/register" style={{ color: '#707075' }}>Create Account</a>
//             </label>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


// login.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import './login.css';

const LoginForm = ({ onLogin }) => {
  useEffect(() => {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const submitButton = document.querySelector('#submit');
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

    emailInput.addEventListener('focus', () => animatePath(0));
    passwordInput.addEventListener('focus', () => animatePath(-336));
    submitButton.addEventListener('focus', () => animatePath(-730));
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onLogin();
  // };

  // login.js
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token);
    onLogin();
  } else {
    alert(data.message || 'Login failed');
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
            <input type="text" id="email" name="username" placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />
            <input type="submit" id="submit" value="Submit" />
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



