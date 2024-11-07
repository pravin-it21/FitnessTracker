// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Dashboard from './Dashboard';
// import FoodRecommendation from './FoodRecommendation';
// import ExerciseRecommendation from './ExerciseRecommendation';
// import ExerciseTracking from './ExerciseTracking';
// import Recipes from './Recipes';
// import ChatbotSupport from './ChatbotSupport';
// import Login from './login';
// import SignUp from './signup'; // Ensure the path is correct

// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         {isAuthenticated ? (
//           <>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/food-recommendation" element={<FoodRecommendation />} />
//             <Route path="/exercise-recommendation" element={<ExerciseRecommendation />} />
//             <Route path="/exercise-tracking" element={<ExerciseTracking />} />
//             <Route path="/recipes" element={<Recipes />} />
//             <Route path="/chatbot-support" element={<ChatbotSupport />} />
//           </>
//         ) : (
//           <>
//             <Route path="/" element={<Login onLogin={handleLogin} />} />
//             <Route path="/register" element={<SignUp />} />
//           </>
//         )}
//       </Routes>

//       {isAuthenticated && <Sidebar />}
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import FoodRecommendation from './FoodRecommendation';
import ExerciseRecommendation from './ExerciseRecommendation';
import ExerciseTracking from './ExerciseTracking';
import Recipes from './Recipes';
import ChatbotSupport from './ChatbotSupport';
import Login from './login';
import SignUp from './signup'; // Ensure the path is correct

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage to determine if the user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true); // Set as authenticated
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token when logging out
    setIsAuthenticated(false); // Set as not authenticated
  };

  return (
    <Router>
      <Routes>
        {/* Landing page: Redirect to Dashboard if authenticated, otherwise show Login */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
        
        {/* Protected Routes: Only accessible if authenticated */}
        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/food-recommendation" element={<FoodRecommendation />} />
            <Route path="/exercise-recommendation" element={<ExerciseRecommendation />} />
            <Route path="/exercise-tracking" element={<ExerciseTracking />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/chatbot-support" element={<ChatbotSupport />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<SignUp />} />
          </>
        )}
      </Routes>

      {/* Show Sidebar only if authenticated */}
      {isAuthenticated && <Sidebar onLogout={handleLogout} />}
    </Router>
  );
}

export default App;
