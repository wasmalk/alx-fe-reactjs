// src/App.jsx
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      {/* Form to add new recipes */}
      <AddRecipeForm />
      {/* List of existing recipes */}
      <RecipeList />
    </div>
  );
};




export default App
