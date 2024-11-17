// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
          </div>
        ))
      ) : (
        <p>No recipes added yet.</p>
      )}
    </div>
  );
};

export default RecipeList;
