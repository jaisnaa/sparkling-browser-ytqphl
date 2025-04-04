import React from "react";

const RecipeCard = ({ recipe, viewRecipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <button onClick={() => viewRecipe(recipe)}>View Recipe</button>
    </div>
  );
};

export default RecipeCard;
