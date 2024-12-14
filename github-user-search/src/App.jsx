import React, { useState } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import { getUser } from './services/githubAPI';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      setError(null); // Clear previous errors
      const userData = await getUser(username); // Call API to fetch user data
      setUser(userData); // Update user state with fetched data
    } catch (err) {
      setUser(null); // Clear user data if there's an error
      setError('User not found'); // Set error message
    }
  };

  return (
    <div>
      {/* App Header */}
      <Header />

      {/* Search Form */}
      <SearchForm onSearch={handleSearch} />

      {/* Display Error (if any) */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* Display User Info */}
      <UserCard user={user} />
    </div>
  );
};

export default App;
