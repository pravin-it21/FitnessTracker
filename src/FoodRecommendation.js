// import React, { useState } from 'react';
// import './FoodRecommendation.css';

// const FoodRecommendation = () => {
//   const [bmi, setBmi] = useState(null);
//   const [recommendations, setRecommendations] = useState([]);
//   const [mealTimetable, setMealTimetable] = useState([]);

//   // Function to fetch food recommendations and meal timetable based on BMI
//   const fetchFoodRecommendations = () => {
//     if (bmi < 18.5) {
//       setRecommendations([
//         'Oatmeal with Almonds',
//         'Grilled Chicken with Sweet Potatoes',
//         'Quinoa Salad',
//         'Smoothie with Spinach and Berries',
//         'Greek Yogurt with Honey and Mixed Nuts',
//         'Avocado Toast with Eggs',
//         'Lentil Soup with Whole-Grain Bread',
//       ]);
//       setMealTimetable([
//         { day: 'Monday', breakfast: 'Oatmeal with Almonds', lunch: 'Grilled Chicken with Sweet Potatoes', dinner: 'Quinoa Salad' },
//         { day: 'Tuesday', breakfast: 'Greek Yogurt with Honey and Mixed Nuts', lunch: 'Salmon with Steamed Veggies', dinner: 'Brown Rice with Stir-Fried Tofu' },
//         { day: 'Wednesday', breakfast: 'Smoothie with Spinach and Berries', lunch: 'Turkey Sandwich with Avocado', dinner: 'Lentil Soup with Whole-Grain Bread' },
//         { day: 'Thursday', breakfast: 'Avocado Toast with Eggs', lunch: 'Chicken and Quinoa Salad', dinner: 'Pasta with Alfredo Sauce and Grilled Chicken' },
//         { day: 'Friday', breakfast: 'Greek Yogurt with Honey and Mixed Nuts', lunch: 'Turkey and Cheese Sandwich', dinner: 'Beef Stew with Potatoes' },
//         { day: 'Saturday', breakfast: 'Smoothie with Spinach and Berries', lunch: 'Chicken Caesar Salad', dinner: 'Grilled Salmon with Brown Rice' },
//         { day: 'Sunday', breakfast: 'Oatmeal with Almonds', lunch: 'Lentil Soup', dinner: 'Chicken and Sweet Potatoes' },
//       ]);
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       setRecommendations([
//         'Grilled Salmon with Asparagus',
//         'Chicken Caesar Salad',
//         'Whole Wheat Pasta with Veggies',
//         'Greek Yogurt with Fresh Fruit',
//         'Smoothie Bowl with Fresh Berries',
//         'Avocado Toast with Tomato',
//         'Stuffed Peppers with Turkey and Vegetables',
//       ]);
//       setMealTimetable([
//         { day: 'Monday', breakfast: 'Greek Yogurt with Fresh Fruit', lunch: 'Grilled Salmon with Asparagus', dinner: 'Whole Wheat Pasta with Veggies' },
//         { day: 'Tuesday', breakfast: 'Smoothie Bowl with Fresh Berries', lunch: 'Chicken Caesar Salad', dinner: 'Stuffed Peppers with Turkey and Vegetables' },
//         { day: 'Wednesday', breakfast: 'Avocado Toast with Tomato', lunch: 'Turkey Wrap with Veggies', dinner: 'Grilled Veggie Stir-Fry' },
//         { day: 'Thursday', breakfast: 'Greek Yogurt with Fresh Fruit', lunch: 'Chicken and Quinoa Salad', dinner: 'Baked Cod with Sweet Potato' },
//         { day: 'Friday', breakfast: 'Smoothie Bowl with Fresh Berries', lunch: 'Chicken Caesar Salad', dinner: 'Spaghetti with Marinara Sauce' },
//         { day: 'Saturday', breakfast: 'Avocado Toast with Tomato', lunch: 'Grilled Salmon with Asparagus', dinner: 'Whole Wheat Pasta with Veggies' },
//         { day: 'Sunday', breakfast: 'Greek Yogurt with Fresh Fruit', lunch: 'Turkey Wrap', dinner: 'Grilled Veggie Stir-Fry' },
//       ]);
//     } else {
//       setRecommendations([
//         'Vegetable Soup',
//         'Grilled Chicken with Broccoli',
//         'Salmon with Steamed Veggies',
//         'Mixed Green Salad',
//         'Chia Pudding with Almond Milk',
//         'Fruit Smoothie',
//         'Cauliflower Rice Stir-Fry',
//       ]);
//       setMealTimetable([
//         { day: 'Monday', breakfast: 'Mixed Green Salad', lunch: 'Grilled Chicken with Broccoli', dinner: 'Vegetable Soup' },
//         { day: 'Tuesday', breakfast: 'Chia Pudding with Almond Milk', lunch: 'Salmon with Steamed Veggies', dinner: 'Quinoa Salad' },
//         { day: 'Wednesday', breakfast: 'Fruit Smoothie', lunch: 'Chicken Salad', dinner: 'Veggie Stir-Fry' },
//         { day: 'Thursday', breakfast: 'Chia Pudding with Almond Milk', lunch: 'Grilled Chicken with Mixed Veggies', dinner: 'Vegetable Soup' },
//         { day: 'Friday', breakfast: 'Fruit Smoothie', lunch: 'Salmon with Steamed Veggies', dinner: 'Cauliflower Rice Stir-Fry' },
//         { day: 'Saturday', breakfast: 'Mixed Green Salad', lunch: 'Chicken Salad', dinner: 'Grilled Veggies' },
//         { day: 'Sunday', breakfast: 'Chia Pudding with Almond Milk', lunch: 'Quinoa Salad', dinner: 'Vegetable Soup' },
//       ]);
//     }
//   };

//   // Function to handle BMI change and fetch recommendations
//   const handleBmiChange = (e) => {
//     const newBmi = parseFloat(e.target.value);
//     if (!isNaN(newBmi)) {
//       setBmi(newBmi);
//       fetchFoodRecommendations();
//     }
//   };

//   return (
//     <div className="food-recommendation">
//       <h1>Food Recommendations</h1>
      
//       <div className="bmi-input">
//         <input
//           type="number"
//           placeholder="Enter your BMI"
//           value={bmi || ''}
//           onChange={handleBmiChange}
//           step="0.1"
//         />
//       </div>

//       {bmi && (
//         <>
//           <div className="recommendations">
//             <h2>Recommended Foods</h2>
//             <ul>
//               {recommendations.map((food, index) => (
//                 <li key={index}>{food}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="meal-timetable">
//             <h2>Weekly Meal Timetable</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Day</th>
//                   <th>Breakfast</th>
//                   <th>Lunch</th>
//                   <th>Dinner</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mealTimetable.map((meal, index) => (
//                   <tr key={index}>
//                     <td>{meal.day}</td>
//                     <td>{meal.breakfast}</td>
//                     <td>{meal.lunch}</td>
//                     <td>{meal.dinner}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FoodRecommendation;


import React, { useState } from 'react';
import './FoodRecommendation.css';

const FoodRecommendation = () => {
  const [bmi, setBmi] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [nutrientLevels, setNutrientLevels] = useState({});
  const [mealTimetable, setMealTimetable] = useState([]);
  const [dietaryPreference, setDietaryPreference] = useState('');

  const fetchFoodRecommendations = () => {
    let nutrients = {};
    let meals = [];

    if (bmi < 1 || isNaN(bmi)) {
      alert('Please enter a valid BMI greater than 0');
      return;
    }

    const allMeals = getAllMeals();
    meals = allMeals.filter(meal =>
      dietaryPreference === '' || meal.dietary.includes(dietaryPreference)
    );

    if (bmi < 18) {
      nutrients = { protein: '100g', carbs: '300g', fats: '70g' };
    } else if (bmi < 20) {
      nutrients = { protein: '80g', carbs: '250g', fats: '60g' };
    } else if (bmi < 23) {
      nutrients = { protein: '70g', carbs: '230g', fats: '50g' };
    } else if (bmi < 25) {
      nutrients = { protein: '60g', carbs: '210g', fats: '45g' };
    } else if (bmi < 28) {
      nutrients = { protein: '50g', carbs: '190g', fats: '40g' };
    } else if (bmi < 32) {
      nutrients = { protein: '40g', carbs: '170g', fats: '35g' };
    } else if (bmi < 35) {
      nutrients = { protein: '30g', carbs: '150g', fats: '30g' };
    } else if (bmi < 40) {
      nutrients = { protein: '25g', carbs: '130g', fats: '25g' };
    } else {
      nutrients = { protein: '20g', carbs: '110g', fats: '20g' };
    }

    setNutrientLevels(nutrients);
    setRecommendations(meals);
    setMealTimetable(createMealTimetable(meals));
  };

  const createMealTimetable = (meals) => {
    const timetable = [];
    for (let i = 0; i < 7; i++) {
      timetable.push({
        day: `Day ${i + 1}`,
        breakfast: meals[Math.floor(Math.random() * meals.length)],
        lunch: meals[Math.floor(Math.random() * meals.length)],
        dinner: meals[Math.floor(Math.random() * meals.length)],
      });
    }
    return timetable;
  };

// Function to get all meals (with dietary preferences)
const getAllMeals = () => {
  return [
    // Vegetarian Meals
    { name: 'Oatmeal with Almonds', protein: '10g', carbs: '40g', fats: '15g', dietary: ['vegetarian', 'vegan'] },
    { name: 'Vegetable Stir Fry', protein: '15g', carbs: '30g', fats: '5g', dietary: ['vegan', 'vegetarian'] },
    { name: 'Quinoa Salad', protein: '8g', carbs: '22g', fats: '6g', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
    { name: 'Chickpea Curry', protein: '14g', carbs: '30g', fats: '5g', dietary: ['vegan', 'vegetarian'] },
    { name: 'Caprese Salad', protein: '7g', carbs: '10g', fats: '5g', dietary: ['vegetarian'] },
    { name: 'Pasta Primavera', protein: '12g', carbs: '60g', fats: '8g', dietary: ['vegetarian'] },
    { name: 'Lentil Soup', protein: '18g', carbs: '25g', fats: '1g', dietary: ['vegan', 'vegetarian'] },
    { name: 'Stuffed Bell Peppers', protein: '9g', carbs: '40g', fats: '3g', dietary: ['vegetarian'] },
    { name: 'Vegetable Pizza', protein: '11g', carbs: '50g', fats: '12g', dietary: ['vegetarian'] },
    { name: 'Greek Yogurt with Berries', protein: '15g', carbs: '20g', fats: '3g', dietary: ['vegetarian'] },
    { name: 'Spinach and Feta Omelette', protein: '18g', carbs: '2g', fats: '10g', dietary: ['vegetarian'] },
    { name: 'Avocado Toast', protein: '5g', carbs: '30g', fats: '15g', dietary: ['vegan', 'vegetarian'] },
    { name: 'Chia Seed Pudding', protein: '6g', carbs: '20g', fats: '7g', dietary: ['vegan'] },
    { name: 'Mushroom Risotto', protein: '9g', carbs: '45g', fats: '6g', dietary: ['vegetarian'] },
    { name: 'Sweet Potato and Black Bean Tacos', protein: '12g', carbs: '35g', fats: '4g', dietary: ['vegan', 'vegetarian'] },
    { name: 'Eggplant Parmesan', protein: '14g', carbs: '30g', fats: '8g', dietary: ['vegetarian'] },
    { name: 'Vegan Chili', protein: '20g', carbs: '40g', fats: '5g', dietary: ['vegan'] },
    { name: 'Zucchini Noodles with Pesto', protein: '9g', carbs: '15g', fats: '5g', dietary: ['vegan', 'vegetarian'] },
    { name: 'Roasted Cauliflower Tacos', protein: '8g', carbs: '28g', fats: '3g', dietary: ['vegan'] },
    { name: 'Kale and Quinoa Salad', protein: '11g', carbs: '29g', fats: '6g', dietary: ['vegan', 'vegetarian', 'gluten-free'] },
    { name: 'Vegetable Samosas', protein: '7g', carbs: '35g', fats: '12g', dietary: ['vegetarian'] },
    { name: 'Pumpkin Soup', protein: '3g', carbs: '22g', fats: '1g', dietary: ['vegan', 'vegetarian'] },

    // Non-Vegetarian Meals
    { name: 'Grilled Chicken with Sweet Potatoes', protein: '30g', carbs: '45g', fats: '10g', dietary: ['non-vegetarian'] },
    { name: 'Beef Stir Fry', protein: '25g', carbs: '20g', fats: '15g', dietary: ['non-vegetarian'] },
    { name: 'Salmon with Broccoli', protein: '28g', carbs: '10g', fats: '15g', dietary: ['non-vegetarian'] },
    { name: 'Egg Salad Sandwich', protein: '20g', carbs: '35g', fats: '10g', dietary: ['non-vegetarian'] },
    { name: 'Turkey Wrap', protein: '22g', carbs: '30g', fats: '8g', dietary: ['non-vegetarian'] },
    { name: 'Chicken Caesar Salad', protein: '25g', carbs: '15g', fats: '10g', dietary: ['non-vegetarian'] },
    { name: 'Fish Tacos', protein: '20g', carbs: '30g', fats: '8g', dietary: ['non-vegetarian'] },
    { name: 'Pork Chops with Applesauce', protein: '30g', carbs: '15g', fats: '12g', dietary: ['non-vegetarian'] },
    { name: 'Shrimp Stir Fry', protein: '24g', carbs: '20g', fats: '5g', dietary: ['non-vegetarian'] },
    { name: 'Baked Cod with Vegetables', protein: '25g', carbs: '15g', fats: '10g', dietary: ['non-vegetarian'] },
    { name: 'BBQ Chicken Sandwich', protein: '28g', carbs: '40g', fats: '12g', dietary: ['non-vegetarian'] },
    { name: 'Beef Tacos', protein: '22g', carbs: '30g', fats: '8g', dietary: ['non-vegetarian'] },
    { name: 'Lemon Garlic Shrimp Pasta', protein: '30g', carbs: '50g', fats: '15g', dietary: ['non-vegetarian'] },
    { name: 'Chicken Quesadilla', protein: '25g', carbs: '35g', fats: '15g', dietary: ['non-vegetarian'] },
    { name: 'Stuffed Chicken Breast', protein: '32g', carbs: '10g', fats: '12g', dietary: ['non-vegetarian'] },
    { name: 'Crab Cakes', protein: '20g', carbs: '15g', fats: '8g', dietary: ['non-vegetarian'] },
    { name: 'Grilled Lamb Chops', protein: '35g', carbs: '0g', fats: '25g', dietary: ['non-vegetarian'] },
    { name: 'Chicken Biryani', protein: '28g', carbs: '60g', fats: '15g', dietary: ['non-vegetarian'] },
    { name: 'Beef Wellington', protein: '35g', carbs: '40g', fats: '22g', dietary: ['non-vegetarian'] },
    { name: 'Tandoori Chicken', protein: '30g', carbs: '0g', fats: '10g', dietary: ['non-vegetarian'] },
    { name: 'Seafood Paella', protein: '30g', carbs: '50g', fats: '20g', dietary: ['non-vegetarian'] },

    // Vegan Meals
    { name: 'Chia Seed Pudding', protein: '6g', carbs: '20g', fats: '7g', dietary: ['vegan'] },
    { name: 'Vegan Tacos', protein: '15g', carbs: '30g', fats: '5g', dietary: ['vegan'] },
    { name: 'Zucchini Noodles with Marinara', protein: '10g', carbs: '15g', fats: '3g', dietary: ['vegan'] },
    { name: 'Coconut Curry with Vegetables', protein: '8g', carbs: '25g', fats: '12g', dietary: ['vegan'] },
    { name: 'Black Bean Burger', protein: '22g', carbs: '35g', fats: '8g', dietary: ['vegan'] },
    { name: 'Tofu Stir Fry', protein: '20g', carbs: '25g', fats: '12g', dietary: ['vegan'] },
    { name: 'Vegan Lentil Soup', protein: '18g', carbs: '30g', fats: '4g', dietary: ['vegan'] },
    { name: 'Roasted Chickpeas', protein: '10g', carbs: '15g', fats: '5g', dietary: ['vegan'] },
    { name: 'Veggie Sushi Rolls', protein: '8g', carbs: '30g', fats: '2g', dietary: ['vegan'] },
    { name: 'Stuffed Avocado', protein: '9g', carbs: '12g', fats: '14g', dietary: ['vegan'] },
    { name: 'Cauliflower Wings', protein: '6g', carbs: '25g', fats: '5g', dietary: ['vegan'] },
    { name: 'Quinoa and Black Bean Bowl', protein: '18g', carbs: '40g', fats: '4g', dietary: ['vegan'] },
    { name: 'Peanut Butter Banana Smoothie', protein: '15g', carbs: '35g', fats: '8g', dietary: ['vegan'] },
    { name: 'Vegan Chili', protein: '20g', carbs: '40g', fats: '5g', dietary: ['vegan'] },
    { name: 'Raw Veggie Wraps', protein: '8g', carbs: '20g', fats: '5g', dietary: ['vegan'] },
    { name: 'Lentil Tacos', protein: '18g', carbs: '30g', fats: '3g', dietary: ['vegan'] },
    { name: 'Almond Butter Toast', protein: '10g', carbs: '25g', fats: '9g', dietary: ['vegan'] },
    { name: 'Vegan Pancakes', protein: '8g', carbs: '30g', fats: '4g', dietary: ['vegan'] },
    { name: 'Thai Mango Salad', protein: '6g', carbs: '20g', fats: '2g', dietary: ['vegan'] },
    { name: 'Vegan Buddha Bowl', protein: '14g', carbs: '50g', fats: '10g', dietary: ['vegan'] },
    { name: 'Sweet Potato and Black Bean Enchiladas', protein: '10g', carbs: '40g', fats: '5g', dietary: ['vegan'] },

    // Gluten-Free Meals
    { name: 'Quinoa Salad with Chickpeas', protein: '12g', carbs: '29g', fats: '4g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Grilled Chicken with Zucchini', protein: '30g', carbs: '5g', fats: '8g', dietary: ['gluten-free', 'non-vegetarian'] },
    { name: 'Vegetable Soup', protein: '6g', carbs: '10g', fats: '2g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Stuffed Peppers with Quinoa', protein: '9g', carbs: '25g', fats: '3g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Grilled Salmon Salad', protein: '28g', carbs: '10g', fats: '15g', dietary: ['gluten-free', 'non-vegetarian'] },
    { name: 'Egg and Avocado Breakfast Bowl', protein: '16g', carbs: '20g', fats: '14g', dietary: ['gluten-free', 'non-vegetarian'] },
    { name: 'Sweet Potato Hash', protein: '8g', carbs: '40g', fats: '3g', dietary: ['gluten-free', 'vegan'] },
    { name: 'Cauliflower Rice Stir Fry', protein: '8g', carbs: '15g', fats: '5g', dietary: ['gluten-free', 'vegan'] },
    { name: 'Chickpea Salad', protein: '15g', carbs: '30g', fats: '4g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Zucchini Noodles with Pesto', protein: '9g', carbs: '15g', fats: '5g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Lentil Salad', protein: '18g', carbs: '25g', fats: '1g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Fruit Salad', protein: '2g', carbs: '20g', fats: '0g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Baked Sweet Potatoes', protein: '4g', carbs: '30g', fats: '0g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Coconut Curry with Chickpeas', protein: '10g', carbs: '20g', fats: '12g', dietary: ['gluten-free', 'vegan'] },
    { name: 'Roasted Brussels Sprouts', protein: '4g', carbs: '10g', fats: '3g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Gluten-Free Pancakes', protein: '5g', carbs: '25g', fats: '2g', dietary: ['gluten-free', 'vegan'] },
    { name: 'Chia Seed Pudding', protein: '6g', carbs: '20g', fats: '7g', dietary: ['gluten-free', 'vegan'] },
    { name: 'Quinoa and Black Bean Bowl', protein: '18g', carbs: '40g', fats: '4g', dietary: ['gluten-free', 'vegan'] },
    { name: 'Lentil Soup', protein: '18g', carbs: '25g', fats: '1g', dietary: ['gluten-free', 'vegan', 'vegetarian'] },
    { name: 'Chickpea and Spinach Curry', protein: '15g', carbs: '30g', fats: '5g', dietary: ['gluten-free', 'vegan'] },
    { name: 'Eggplant and Tomato Stew', protein: '6g', carbs: '18g', fats: '5g', dietary: ['gluten-free', 'vegan'] },
  ];
};


  return (
    <div className="food-recommendation">
      <h2>Food Recommendation Based on BMI</h2>
      <input
        type="number"
        placeholder="Enter your BMI"
        value={bmi}
        onChange={(e) => setBmi(e.target.value)}
      />
      <select onChange={(e) => setDietaryPreference(e.target.value)} value={dietaryPreference}>
        <option value="">Select Dietary Preference</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="non-vegetarian">Non-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>
      <button onClick={fetchFoodRecommendations}>Get Recommendations</button>

      {Object.keys(nutrientLevels).length > 0 && (
        <div className="nutrient-levels">
          <h3>Nutrient Levels:</h3>
          <p>Protein: {nutrientLevels.protein}</p>
          <p>Carbohydrates: {nutrientLevels.carbs}</p>
          <p>Fats: {nutrientLevels.fats}</p>
        </div>
      )}

      {recommendations.length > 0 && (
        <div className="recommendations">
          <h3>Food Recommendations:</h3>
          <ul>
            {recommendations.map((meal, index) => (
              <li key={index}>
                {meal.name} - Protein: {meal.protein}, Carbs: {meal.carbs}, Fats: {meal.fats}
              </li>
            ))}
          </ul>
        </div>
      )}

      {mealTimetable.length > 0 && (
        <div className="meal-timetable">
          <h3>Weekly Meal Timetable:</h3>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
              </tr>
            </thead>
            <tbody>
              {mealTimetable.map((meal, index) => (
               
               <tr key={index}>
               <td>{meal.day}</td>
               <td>{meal.breakfast.name}</td>
               <td>{meal.lunch.name}</td>
               <td>{meal.dinner.name}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   )}
 </div>
);
};

export default FoodRecommendation;
