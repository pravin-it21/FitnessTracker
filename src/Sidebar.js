import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 class="fitness-tracker">Fitness Tracker</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/food-recommendation">Food Recommendation</Link></li>
        <li><Link to="/exercise-recommendation">Exercise Recommendation</Link></li>
        <li><Link to="/exercise-tracking">Exercise Tracking</Link></li>
        {/* Use an anchor tag for same-page redirection */}
        <li><a href="http://localhost:3000">Recipes</a></li>
        <li><Link to="/chatbot-support">Chatbot Support</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
