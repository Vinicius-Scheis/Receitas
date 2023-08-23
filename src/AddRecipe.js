import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe useNavigate em vez de useHistory

function AddRecipe() {
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");
  const navigate = useNavigate(); // Use useNavigate para navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para adicionar a nova receita à lista e à API fictícia.
    navigate("/"); // Navegue de volta para a lista após adicionar.
  };

  return (
    <div>
      <h1>Adicionar Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <br />
        <label>
          Ingredientes:
          <textarea value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} />
        </label>
        <br />
        <label>
          Modo de Preparo:
          <textarea value={modoPreparo} onChange={(e) => setModoPreparo(e.target.value)} />
        </label>
        <br />
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default AddRecipe;
