import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    setLoading(true); // Set loading state
    setError(null); // Reset error state
    setUser(null); // Reset user data

    try {
      const userData = await fetchUserData(username); // Fetch user data from API
      setUser(userData); // Update user state
    } catch (err) {
      setError('Looks like we cant find the user'); // Set specific error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '10px',
            width: '250px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            marginLeft: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p style={{ marginTop: '20px' }}>Loading...</p>} {/* Loading state */}
      {error && <p style={{ marginTop: '20px', color: 'red' }}>{error}</p>} {/* Error state */}
      {user && ( // Render user information
        <div style={{ marginTop: '20px' }}>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio || 'No bio available'}</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#007BFF',
              fontWeight: 'bold',
            }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
