import React from "react";
import "../styles.css";

const RecipeDetails = ({ recipe, closeRecipe }) => {
  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
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
      <button onClick={closeRecipe}>Close</button>
    </div>
  );
};

export default RecipeDetails;
