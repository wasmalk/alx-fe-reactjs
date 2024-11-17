// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';
import useRecipeStore from './recipeStore';


const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && description.trim()) {
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Add Recipe
      </button>
    </form>
  );
};
addRecipe({ id: 1, title: "Pasta", description: "Delicious pasta recipe" });
deleteRecipe(1); // Removes the recipe with ID 1.
updateRecipe(1, { title: "Updated Pasta", description: "New description" });

export default AddRecipeForm;
