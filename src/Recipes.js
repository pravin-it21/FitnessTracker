import React, { useState } from 'react';
import './Recipes.css';

const Recipe = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Sample recipe data - Replace with actual recipe details
  const recipes = {
    "Oatmeal with Almonds": {
      ingredients: [
        "1/2 cup rolled oats",
        "1 cup almond milk",
        "1 tablespoon honey",
        "1/4 cup sliced almonds",
        "1/4 teaspoon cinnamon"
      ],
      steps: [
        " In a saucepan, bring the almond milk to a boil.",
        " Stir in the oats and reduce heat to a simmer.",
        " Cook for 5-7 minutes, stirring occasionally, until the oats are tender.",
        " Remove from heat and stir in honey and cinnamon.",
        " Top with sliced almonds and serve warm."
      ]
    },
    "Grilled Chicken with Sweet Potatoes": {
      ingredients: [
        "1 boneless chicken breast",
        "1 large sweet potato",
        "1 tablespoon olive oil",
        "Salt and pepper to taste",
        "1 teaspoon paprika"
      ],
      steps: [
        " Preheat the grill to medium-high heat.",
        " Season the chicken breast with salt, pepper, and paprika.",
        " Grill the chicken for 5-7 minutes on each side or until fully cooked.",
        " Peel and slice the sweet potato into rounds.",
        " Drizzle with olive oil and season with salt and pepper.",
        " Grill the sweet potato slices for 3-4 minutes on each side.",
        " Serve the chicken with the grilled sweet potatoes."
      ]
    },
    "Quinoa Salad": {
      ingredients: [
        "1 cup quinoa",
        "2 cups water",
        "1/2 cucumber, diced",
        "1/2 bell pepper, diced",
        "1/4 cup chopped parsley",
        "2 tablespoons olive oil",
        "Juice of 1 lemon",
        "Salt and pepper to taste"
      ],
      steps: [
        " Rinse the quinoa under cold water.",
        " In a saucepan, combine the quinoa and water. Bring to a boil.",
        " Reduce the heat, cover, and simmer for 15 minutes or until the water is absorbed.",
        " Fluff the quinoa with a fork and let cool.",
        " In a large bowl, mix the quinoa with the cucumber, bell pepper, and parsley.",
        " Drizzle with olive oil and lemon juice, and season with salt and pepper.",
        " Toss to combine and serve chilled."
      ]
    },
    "Smoothie with Spinach and Berries": {
      ingredients: [
        "1 cup spinach",
        "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
        "1 banana",
        "1 cup almond milk",
        "1 tablespoon chia seeds"
      ],
      steps: [
        " Place all ingredients in a blender.",
        " Blend until smooth and creamy.",
        " Pour into a glass and enjoy!"
      ]
    },
    // Add more recipes for other food items...
  };

  const handleRecipeSelect = (foodItem) => {
    setSelectedRecipe(recipes[foodItem]);
  };

  return (
    <div className="recipe-container">
      <h1>Recipe Guide</h1>
      <div className="food-list">
        <h2>Select a Food Item</h2>
        <ul>
          {Object.keys(recipes).map((foodItem, index) => (
            <li key={index} onClick={() => handleRecipeSelect(foodItem)}>
              {foodItem}
            </li>
          ))}
        </ul>
      </div>

      {selectedRecipe && (
        <div className="recipe-details">
          <h2>Recipe for {Object.keys(recipes).find(item => recipes[item] === selectedRecipe)}</h2>
          <h3>Ingredients</h3>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <ol>
            {selectedRecipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Recipe;
