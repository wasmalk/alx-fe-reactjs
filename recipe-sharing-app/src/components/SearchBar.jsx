// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
    </div>
  );
};

const styles = {
  searchContainer: {
    textAlign: 'center',
    marginBottom: '20px',
    padding: '10px',
  },
  searchInput: {
    padding: '10px',
    width: '80%',
    maxWidth: '600px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default SearchBar;
