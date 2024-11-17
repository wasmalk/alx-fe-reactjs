// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home route with recipe list and form */}
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />

          {/* Recipe details route */}
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

// Wrapper to handle dynamic route parameters
const RecipeDetailsWrapper = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  return <RecipeDetails recipeId={parseInt(id, 10)} />;
};

export default App;
