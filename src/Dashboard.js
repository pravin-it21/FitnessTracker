import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [steps, setSteps] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [heartBeats, setHeartBeats] = useState(0);

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [calories, setCalories] = useState('');
  const [healthTip, setHealthTip] = useState('Drink plenty of water throughout the day to stay hydrated!');

  // Simulate fetching smartwatch data
  const fetchSmartWatchData = () => {
    setSteps(8500); // Dummy data, replace with API call result
    setHeartRate(72); // Dummy heart rate
    setHeartBeats(103680); // Calculate based on time and heart rate
  };

  useEffect(() => {
    fetchSmartWatchData();
  }, []);

  // Function to calculate BMI
  const calculateBMI = () => {
    if (weight && height && age) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBmi);
      determineBMICategory(calculatedBmi);
    }
  };

  // Determine BMI Category and recommended calorie intake
  const determineBMICategory = (bmiValue) => {
    let category = '';
    let recommendedCalories = '';

    if (bmiValue < 18.5) {
      category = 'Underweight';
      recommendedCalories = '2500 kcal per day';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = 'Normal';
      recommendedCalories = '2000 kcal per day';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = 'Overweight';
      recommendedCalories = '1800 kcal per day';
    } else {
      category = 'Obese';
      recommendedCalories = '1500 kcal per day';
    }

    setBmiCategory(category);
    setCalories(recommendedCalories);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* Smartwatch Health Stats */}
      <div className="health-stats">
        <h2>Today's Health Stats</h2>
        <div className="stat-box">
          <p>Steps Walked: <strong>{steps}</strong></p>
          <p>Heart Rate: <strong>{heartRate} BPM</strong></p>
          <p>Total Heartbeats: <strong>{heartBeats}</strong></p>
        </div>
      </div>

      {/* BMI Calculator */}
      <div className="bmi-calculator">
        <h2>Calculate Your BMI</h2>
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
      </div>

      {bmi && (
        <div className="bmi-result">
          <h2>Your BMI: {bmi}</h2>
          <p>You are classified as: <strong>{bmiCategory}</strong></p>
          <p>Recommended Daily Calorie Intake: <strong>{calories}</strong></p>
        </div>
      )}

      {/* Health Tip */}
      <div className="health-tip">
        <h2>Health Tip of the Day</h2>
        <p>{healthTip}</p>
      </div>

      {/* BMI Chart */}
      <div className="bmi-chart">
        <h2>BMI Chart</h2>
        <table>
          <thead>
            <tr>
              <th>BMI Category</th>
              <th>BMI Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Underweight</td>
              <td>&lt; 18.5</td>
            </tr>
            <tr>
              <td>Normal weight</td>
              <td>18.5 – 24.9</td>
            </tr>
            <tr>
              <td>Overweight</td>
              <td>25 – 29.9</td>
            </tr>
            <tr>
              <td>Obese</td>
              <td>&ge; 30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
