import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: '',
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false); // To track if there are more results to load

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, location, minRepos } = formData;

    if (!username) {
      setError('Please enter a username to search.');
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);
    setCurrentPage(1);

    try {
      const { users: fetchedUsers, hasNextPage } = await fetchUserData({
        username,
        location,
        minRepos,
        page: 1,
      });
      setUsers(fetchedUsers);
      setHasMore(hasNextPage);
    } catch (err) {
      setError('No users match the specified criteria.');
    } finally {
      setLoading(false);
    }
  };

  const loadMoreResults = async () => {
    setLoading(true);
    const { username, location, minRepos } = formData;

    try {
      const { users: newUsers, hasNextPage } = await fetchUserData({
        username,
        location,
        minRepos,
        page: currentPage + 1,
      });
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      setCurrentPage((prevPage) => prevPage + 1);
      setHasMore(hasNextPage);
    } catch (err) {
      setError('Failed to load more users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
        aria-label="GitHub user search form"
      >
        <h1 className="text-2xl font-bold text-center">GitHub User Search</h1>

        {/* Username Input */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter GitHub username"
            required
          />
        </div>

        {/* Location Input */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter location (optional)"
          />
        </div>

        {/* Minimum Repositories Input */}
        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
            Minimum Repositories
          </label>
          <input
            type="number"
            name="minRepos"
            id="minRepos"
            value={formData.minRepos}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter minimum repositories (optional)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      <div className="mt-6 text-center">
        {loading && <p className="text-gray-500">Loading...</p>} {/* Loading State */}
        {error && <p className="text-red-500">{error}</p>} {/* Error State */}
        {users.length > 0 && (
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
              >
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-bold">{user.login}</h2>
                  <p className="text-gray-600">
                    Location: {user.location || 'Not specified'}
                  </p>
                  <p className="text-gray-600">Repositories: {user.public_repos}</p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
            {hasMore && (
              <button
                onClick={loadMoreResults}
                className="mt-4 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
