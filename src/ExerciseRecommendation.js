import React, { useState } from 'react';
import './ExerciseRecommendation.css';

const ExerciseRecommendation = () => {
  const [bmi, setBmi] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [exerciseSchedule, setExerciseSchedule] = useState([]);

  // Function to fetch exercise recommendations and schedule based on BMI
  const fetchExerciseRecommendations = () => {
    if (bmi < 18.5) {
      setRecommendations([
        'Strength Training (3 times a week)',
        'High-Calorie Smoothies and Shakes',
        'Yoga and Stretching',
        'Bodyweight Exercises (Push-ups, Squats)',
        'Swimming',
      ]);
      setExerciseSchedule([
        { day: 'Monday', exercise: 'Strength Training' },
        { day: 'Tuesday', exercise: 'Yoga and Stretching' },
        { day: 'Wednesday', exercise: 'High-Calorie Smoothies and Shakes' },
        { day: 'Thursday', exercise: 'Bodyweight Exercises' },
        { day: 'Friday', exercise: 'Swimming' },
        { day: 'Saturday', exercise: 'Rest Day' },
        { day: 'Sunday', exercise: 'Yoga and Stretching' },
      ]);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setRecommendations([
        'Cardio Exercises (Running, Cycling)',
        'Strength Training (2 times a week)',
        'High-Intensity Interval Training (HIIT)',
        'Flexibility Exercises (Stretching, Yoga)',
        'Moderate Swimming',
      ]);
      setExerciseSchedule([
        { day: 'Monday', exercise: 'Cardio Exercise' },
        { day: 'Tuesday', exercise: 'Strength Training' },
        { day: 'Wednesday', exercise: 'HIIT' },
        { day: 'Thursday', exercise: 'Flexibility Exercises' },
        { day: 'Friday', exercise: 'Cardio Exercise' },
        { day: 'Saturday', exercise: 'Strength Training' },
        { day: 'Sunday', exercise: 'Rest Day' },
      ]);
    } else {
      setRecommendations([
        'Low-Impact Cardio (Walking, Cycling)',
        'Strength Training with Light Weights',
        'Stretching and Flexibility Exercises',
        'Low-Intensity Yoga',
        'Water Aerobics',
      ]);
      setExerciseSchedule([
        { day: 'Monday', exercise: 'Low-Impact Cardio' },
        { day: 'Tuesday', exercise: 'Strength Training with Light Weights' },
        { day: 'Wednesday', exercise: 'Stretching and Flexibility Exercises' },
        { day: 'Thursday', exercise: 'Low-Intensity Yoga' },
        { day: 'Friday', exercise: 'Water Aerobics' },
        { day: 'Saturday', exercise: 'Rest Day' },
        { day: 'Sunday', exercise: 'Stretching and Flexibility Exercises' },
      ]);
    }
  };

  // Function to handle BMI change and fetch recommendations
  const handleBmiChange = (e) => {
    const newBmi = parseFloat(e.target.value);
    if (!isNaN(newBmi)) {
      setBmi(newBmi);
      fetchExerciseRecommendations();
    }
  };

  return (
    <div className="exercise-recommendation">
      <h1>Exercise Recommendations</h1>
      
      <div className="bmi-input">
        <input
          type="number"
          placeholder="Enter your BMI"
          value={bmi || ''}
          onChange={handleBmiChange}
          step="0.1"
        />
      </div>

      {bmi && (
        <>
          <div className="recommendations">
            <h2>Recommended Exercises</h2>
            <ul>
              {recommendations.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </div>

          <div className="exercise-schedule">
            <h2>Weekly Exercise Schedule</h2>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Exercise</th>
                </tr>
              </thead>
              <tbody>
                {exerciseSchedule.map((exercise, index) => (
                  <tr key={index}>
                    <td>{exercise.day}</td>
                    <td>{exercise.exercise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ExerciseRecommendation;
