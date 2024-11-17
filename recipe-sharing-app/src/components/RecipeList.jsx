// src/components/RecipeList.jsx
import { useEffect } from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Effect to filter recipes whenever the search term is updated
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update the search term
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Recipes"
        onChange={handleSearch}
        style={{ marginBottom: '10px' }}
      />
      <h2>Recipe List</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
