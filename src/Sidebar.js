import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext'; // Import your custom auth context
import './Sidebar.css';
// import { useAuthContext } from './AuthContext'; // Correct the import path


function Sidebar() {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext(); // Access dispatch from context

  // Function to handle logout and reset everything
  const handleLogout = () => {
    // Clear all session data
    localStorage.clear(); // Remove items from localStorage
    sessionStorage.clear(); // Clear sessionStorage if you use it
    
    // Reset auth state in context (or Redux)
    dispatch({ type: 'LOGOUT' }); // Reset authentication state
    
    // Navigate to the landing page or login page
    navigate('/'); // Assuming your landing page is '/'
    window.location.reload();  // Optional: You can also use this to force a page reload

  };

  // Get the username of the logged-in user from localStorage
  const username = localStorage.getItem('username');

  return (
    <div className="sidebar">
      <h2 className="fitness-tracker">Fitness Tracker</h2>

      {/* Display the logged-in user's username */}
      {username ? (
        <div className="username">
          Welcome, <span style={{ fontWeight: 'bold' }}>{username}</span>
        </div>
      ) : (
        <div className="username">Welcome, Guest</div>
      )}

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/food-recommendation">Food Recommendation</Link></li>
        <li><Link to="/exercise-recommendation">Exercise Recommendation</Link></li>
        <li><Link to="/exercise-tracking">Exercise Tracking</Link></li>
        <li><a onClick={() => window.location.href = 'http://localhost:3000'} style={{ cursor: 'pointer' }}>Recipes</a></li>
        <li><Link to="/chatbot-support">Chatbot Support</Link></li>
      </ul>

      {/* Display the logout button if the user is logged in */}
      {username && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}

export default Sidebar;
