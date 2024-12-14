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
      setError(null);
      const userData = await getUser(username);
      setUser(userData);
    } catch (err) {
      setUser(null);
      setError('User not found');
    }
  };

  return (
    <div>
      <Header />
      <SearchForm onSearch={handleSearch} />
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <UserCard user={user} />
    </div>
  );
};

export default App;
