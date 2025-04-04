import React, { useState } from "react";
import "../styles.css";

const recipes = [
  {
    id: 1,
    name: "Sushi",
    image: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
    description: "Fresh salmon sushi with rice and seaweed.",
    ingredients: ["Rice", "Seaweed", "Salmon", "Soy Sauce"],
    steps: [
      "Prepare sushi rice",
      "Cut salmon into slices",
      "Roll sushi",
      "Serve with soy sauce",
    ],
  },
  {
    id: 2,
    name: "Spaghetti",
    image: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    description: "Classic Italian pasta with tomato sauce and cheese.",
    ingredients: ["Spaghetti", "Tomato Sauce", "Cheese", "Garlic"],
    steps: [
      "Boil spaghetti",
      "Prepare sauce",
      "Mix spaghetti and sauce",
      "Garnish with cheese",
    ],
  },
  {
    id: 3,
    name: "Burger",
    image: "https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg",
    description: "Juicy beef burger with lettuce and cheese.",
    ingredients: ["Beef Patty", "Burger Bun", "Lettuce", "Cheese"],
    steps: ["Grill patty", "Toast bun", "Assemble burger", "Serve with fries"],
  },
  {
    id: 4,
    name: "Pizza",
    image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    description: "Hot and cheesy pepperoni pizza.",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Cheese", "Pepperoni"],
    steps: ["Prepare dough", "Spread sauce", "Add toppings", "Bake in oven"],
  },
  {
    id: 5,
    name: "Fish Salad",
    image: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
    description: "Healthy green salad with fresh veggies.",
    ingredients: ["Fish", "Lettuce", "Tomato", "Cucumber", "Dressing"],
    steps: [
      "Boil and season fish",
      "Chop vegetables",
      "Mix in bowl",
      "Add dressing",
      "Serve fresh",
    ],
  },
  {
    id: 6,
    name: "Fish Fry",
    image: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    description: "Mouthwatering fish fry.",
    ingredients: ["Fish", "Turmeric", "Salt", "Masalas"],
    steps: ["Marinate", "Freeze", "Fry"],
  },
];

const Home = ({ goToAddRecipe }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const toggleRecipeDetails = (id) => {
    setSelectedRecipe(selectedRecipe === id ? null : id);
  };

  return (
    <div className="home">
      <h1>Welcome to the Recipe Sharing Platform! 🍽️</h1>
      <h2>Have a good meal, lead a healthy life</h2>
      <button onClick={goToAddRecipe} className="add-recipe-btn">
        Add Your Recipe
      </button>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <button onClick={() => toggleRecipeDetails(recipe.id)}>
              {selectedRecipe === recipe.id ? "Hide Recipe" : "View Recipe"}
            </button>

            {selectedRecipe === recipe.id && (
              <div className="recipe-details">
                <h3>Ingredients:</h3>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h3>Steps:</h3>
                <ol>
                  {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
