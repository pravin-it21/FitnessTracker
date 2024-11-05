import React, { useState } from 'react';
import './App.css';
import FoodRecommendation from './FoodRecommendation';
import ExerciseRecommendation from './ExerciseRecommendation';
import Chatbot from './Chatbot';  // Import Chatbot Component

function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const targetBmi = 21;  // Set the target BMI to 21

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100;
    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue);
    } else {
      setBmi(null);
    }
  };

  return (
    <div className="container">
      <h1>Personalized Fitness Tracker</h1>
      <input 
        type="number" 
        placeholder="Weight (kg)" 
        value={weight}
        onChange={(e) => setWeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Height (cm)" 
        value={height}
        onChange={(e) => setHeight(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Age" 
        value={age}
        onChange={(e) => setAge(e.target.value)} 
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && <p>Your BMI: {bmi.toFixed(2)}</p>}
      {bmi !== null && (
        <>
          <FoodRecommendation bmi={bmi} age={age} />
          <ExerciseRecommendation bmi={bmi} targetBmi={targetBmi} currentWeight={parseFloat(weight)} />
        </>
      )}
      {/* Adding Chatbot Component */}
      <Chatbot />
    </div>
  );
}

export default BMI;
