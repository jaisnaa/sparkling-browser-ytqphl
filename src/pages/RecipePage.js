import React from "react";

const RecipePage = ({ recipe, setPage }) => {
  if (!recipe) return <p>No recipe selected.</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <button onClick={() => setPage("home")}>Back to Home</button>
    </div>
  );
};

export default RecipePage;
