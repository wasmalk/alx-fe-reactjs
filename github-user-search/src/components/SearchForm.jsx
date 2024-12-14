import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username); // Trigger search
      setUsername(''); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '10px', width: '200px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 15px',
          marginLeft: '10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
