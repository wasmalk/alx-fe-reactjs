// src/components/CookingTimeFilter.jsx
import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const CookingTimeFilter = () => {
  const setCookingTimeFilter = useRecipeStore(state => state.setCookingTimeFilter);

  return (
    <div style={styles.filterContainer}>
      <input
        type="number"
        placeholder="Max cooking time (in minutes)"
        onChange={(e) => setCookingTimeFilter(e.target.value)}
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

export default CookingTimeFilter;
