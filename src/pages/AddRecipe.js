import React, { useState } from "react";
import "../styles.css";

const AddRecipe = ({ onAddRecipe, goHome }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      image,
      description,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((step) => step.trim()),
    };
    onAddRecipe(newRecipe);
   
    setName("");
    setImage("");
    setDescription("");
    setIngredients("");
    setSteps("");
    
    goHome();
  };

  return (
    <div
      className="add-recipe-page"
      style={{
        minHeight: "100vh",
        padding: "30px",
        color: "white",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button onClick={goHome} className="back-button">
        🔙 Back to Home
      </button>
      <h2>Add Your Own Recipe</h2>
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Dish Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <textarea
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Steps (separate by periods)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
