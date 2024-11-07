// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Ensure correct import
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import FoodRecommendation from './FoodRecommendation';
import ExerciseRecommendation from './ExerciseRecommendation';
import ExerciseTracking from './ExerciseTracking';
import Recipes from './Recipes';
import ChatbotSupport from './ChatbotSupport';
import Login from './login';
import SignUp from './signup'; // Ensure correct import

import './App.css';

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthProvider>  {/* Wrap your app with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          {!isAuthenticated && (
            <>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<SignUp />} />
            </>
          )}
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/food-recommendation" element={<PrivateRoute element={<FoodRecommendation />} />} />
          <Route path="/exercise-recommendation" element={<PrivateRoute element={<ExerciseRecommendation />} />} />
          <Route path="/exercise-tracking" element={<PrivateRoute element={<ExerciseTracking />} />} />
          <Route path="/recipes" element={<PrivateRoute element={<Recipes />} />} />
          <Route path="/chatbot-support" element={<PrivateRoute element={<ChatbotSupport />} />} />
        </Routes>

        {isAuthenticated && <Sidebar onLogout={handleLogout} />}
      </Router>
    </AuthProvider>
  );
}

export default App;
