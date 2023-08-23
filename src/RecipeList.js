import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchRecipes from "./fakeApi";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes().then((data) => setRecipes(data));
    }, []);

    return (
        <div className="container">
            <h1 className="header">Lista de Receitas</h1>
            <ul className="recipe-list">
                {recipes.map((recipe) => (
                    <li key={recipe.id} className="recipe-list-item">
                        <img src={recipe.imagem} alt={recipe.titulo} className="recipe-image" />
                        <h2 className="recipe-title">{recipe.titulo}</h2>
                        <Link to={`/recipe/${recipe.id}`} className="recipe-link">Ver Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
