import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import fetchRecipes from "./fakeApi";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes().then((data) => {
      const selectedRecipe = data.find((r) => r.id === Number(id));
      setRecipe(selectedRecipe);
    });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="recipe-details-container">
        <img src={recipe.imagem} alt={recipe.titulo} className="recipe-details-image" />
        <h1 className="recipe-details-title">{recipe.titulo}</h1>
        <p className="recipe-details-ingredients">Ingredientes:</p>
        <p>{recipe.ingredientes}</p>
        <div className="recipe-details-instructions">
          <p>{recipe.modoPreparo}</p>
        </div>
        <Link to="/" className="back-link">Voltar para a Lista</Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
