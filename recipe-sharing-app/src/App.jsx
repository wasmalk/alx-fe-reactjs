import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetails from './components/RecipeDetails'; // Ensure this component exists and is properly imported

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add">Add Recipe</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
              <li><Link to="/recommendations">Recommendations</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/recommendations" element={<RecommendationsList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
