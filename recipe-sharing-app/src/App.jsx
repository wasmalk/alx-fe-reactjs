// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import IngredientsFilter from './components/IngredientsFilter';
import CookingTimeFilter from './components/CookingTimeFilter';

const App = () => (
  <Router>
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <IngredientsFilter />
      <CookingTimeFilter />
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
      </Routes>
    </div>
  </Router>
);

export default App;
