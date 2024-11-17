// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes); // Get filtered recipes
  const filterRecipes = useRecipeStore(state => state.filterRecipes); // Get filter action
  const searchTerm = useRecipeStore(state => state.searchTerm); // Get search term

  // Trigger filtering whenever the search term is updated
  useEffect(() => {
    filterRecipes(); // This will filter based on the current searchTerm
  }, [searchTerm, filterRecipes]); // Re-run whenever searchTerm changes

  return (
    <div style={styles.recipeListContainer}>
      <h2 style={styles.title}>Recipe List</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={styles.recipeCard}>
            <h3 style={styles.recipeTitle}>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
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
