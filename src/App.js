
import React, { useState } from "react";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import "./styles.css";


const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Sushi",
      image:
        "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
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
      image:
        "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
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
      image:
        "https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg",
      description: "Juicy beef burger with lettuce and cheese.",
      ingredients: ["Beef Patty", "Burger Bun", "Lettuce", "Cheese"],
      steps: [
        "Grill patty",
        "Toast bun",
        "Assemble burger",
        "Serve with fries",
      ],
    },
    {
      id: 4,
      name: "Pizza",
      image:
        "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
      description: "Hot and cheesy pepperoni pizza.",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Cheese", "Pepperoni"],
      steps: ["Prepare dough", "Spread sauce", "Add toppings", "Bake in oven"],
    },
    {
      id: 5,
      name: "Fish Salad",
      image: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
      description: "Healthy green salad with fish and veggies.",
      ingredients: ["Fish", "Lettuce", "Tomato", "Cucumber", "Dressing"],
      steps: [
        "Boil and season fish",
        "Chop vegetables",
        "Mix in bowl",
        "Add dressing",
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
  ]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      {currentPage === "home" && (
        <Home
          recipes={recipes}
          goToAddRecipe={() => setCurrentPage("add")}
          goToProfile={() => setCurrentPage("profile")} // 👈 Add this
        />
      )}
  
      {currentPage === "add" && (
        <AddRecipe
          onAddRecipe={handleAddRecipe}
          goHome={() => setCurrentPage("home")}
        />
      )}
  
      {currentPage === "profile" && (
        <UserProfile goHome={() => setCurrentPage("home")} /> // 👈 Add this
      )}
    </div>
  );

};

export default App;
