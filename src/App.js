import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import AddRecipe from './AddRecipe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
