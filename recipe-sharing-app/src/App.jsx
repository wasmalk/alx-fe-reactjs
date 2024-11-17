import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => (
  <Router>
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
      </Routes>
    </div>
  </Router>
);

// Wrapper to handle dynamic route parameters
const RecipeDetailsWrapper = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  return <RecipeDetails recipeId={parseInt(id, 10)} />;
};

export default App;
