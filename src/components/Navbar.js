import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <h1>🍽️ Recipe Sharing</h1>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("addRecipe")}>Add Recipe</button>
    </nav>
  );
};

export default Navbar;
