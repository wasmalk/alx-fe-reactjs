// src/components/IngredientsFilter.jsx
import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const IngredientsFilter = () => {
  const setIngredientsFilter = useRecipeStore(state => state.setIngredientsFilter);

  return (
    <div style={styles.filterContainer}>
      <input
        type="text"
        placeholder="Filter by ingredients..."
        onChange={(e) => setIngredientsFilter(e.target.value)}
        style={styles.filterInput}
      />
    </div>
  );
};

const styles = {
  filterContainer: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  filterInput: {
    padding: '8px',
    width: '80%',
    maxWidth: '600px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default IngredientsFilter;
