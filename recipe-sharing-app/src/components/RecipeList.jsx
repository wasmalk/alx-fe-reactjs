import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  // Check if a recipe is a favorite
  const isFavorite = (recipeId) => favorites.includes(recipeId);

  const toggleFavorite = (recipeId) => {
    if (isFavorite(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};





const styles = {
  recipeListContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  recipeCard: {
    padding: '15px',
    marginBottom: '15px',
    width: '90%',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  recipeTitle: {
    fontSize: '20px',
    margin: '0',
    fontWeight: 'bold',
  },
};

export default RecipeList;
