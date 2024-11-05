
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import FoodRecommendation from './FoodRecommendation';
import ExerciseRecommendation from './ExerciseRecommendation';
import ExerciseTracking from './ExerciseTracking';
import Recipes from './Recipes';
import ChatbotSupport from './ChatbotSupport';
import Login from './login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/food-recommendation" element={<FoodRecommendation />} />
              <Route path="/exercise-recommendation" element={<ExerciseRecommendation />} />
              <Route path="/exercise-tracking" element={<ExerciseTracking />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/chatbot-support" element={<ChatbotSupport />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;


