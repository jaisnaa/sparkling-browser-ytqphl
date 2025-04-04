import React from "react";
import "../styles.css";

const recipes = [
  {
    id: 1,
    name: "Sushi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg",
    description: "Fresh salmon sushi with rice and seaweed.",
  },
  {
    id: 2,
    name: "Spaghetti",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Spaghetti_alla_Carbonara.jpg/800px-Spaghetti_alla_Carbonara.jpg",
    description: "Classic Italian pasta with tomato sauce and cheese.",
  },
  {
    id: 3,
    name: "Burger",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Cheeseburger.jpg",
    description: "Juicy beef burger with lettuce and cheese.",
  },
  {
    id: 4,
    name: "Pizza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
    description: "Hot and cheesy pepperoni pizza.",
  },
  {
    id: 5,
    name: "Salad",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Simple_salad.jpg",
    description: "Healthy green salad with fresh veggies.",
  },
  {
    id: 6,
    name: "Ice Cream",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Ice_Cream_dessert.jpg",
    description: "Delicious vanilla ice cream with chocolate syrup.",
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>🍽️ Welcome to the Recipe Sharing Platform!</h1>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <button>View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
