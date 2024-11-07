import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle Recipes navigation
  const handleRecipesRedirect = () => {
    // Redirect to the external Recipes page of the other project
    window.location.href = 'http://localhost:3000'; // This is a regular redirect to the external site
  };

  // Get the username of the logged-in user (assuming it's stored in localStorage)
  const username = localStorage.getItem('username'); // Retrieve username from localStorage (or replace with your actual method)

  return (
    <div className="sidebar">
      <h2 className="fitness-tracker">Fitness Tracker</h2>
      
      {/* Display the logged-in user's username */}
      {username && <div className="username">Welcome, {username}</div>}
      
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/food-recommendation">Food Recommendation</Link></li>
        <li><Link to="/exercise-recommendation">Exercise Recommendation</Link></li>
        <li><Link to="/exercise-tracking">Exercise Tracking</Link></li>
        {/* Use onClick handler to trigger the external redirect */}
        <li><a onClick={handleRecipesRedirect} style={{ cursor: 'pointer' }}>Recipes</a></li>
        <li><Link to="/chatbot-support">Chatbot Support</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
