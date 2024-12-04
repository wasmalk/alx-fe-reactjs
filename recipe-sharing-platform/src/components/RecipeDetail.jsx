// src/components/RecipeDetail.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover rounded-t-lg"
        />

        <div className="p-6">
          {/* Recipe Title and Summary */}
          <h2 className="text-4xl font-semibold text-gray-900">{recipe.title}</h2>
          <p className="mt-2 text-lg text-gray-600">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Ingredients</h3>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              {recipe.ingredients && recipe.ingredients.length > 0 ? (
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-lg">{ingredient}</li>
                ))
              ) : (
                <p className="text-lg text-gray-500">No ingredients listed.</p>
              )}
            </ul>
          </div>

          {/* Instructions Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Instructions</h3>
            <p className="mt-4 text-lg text-gray-700">{recipe.instructions}</p>
          </div>

          {/* Responsive Section for Smaller Screens */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-block px-6 py-2 mt-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Back to Recipes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
