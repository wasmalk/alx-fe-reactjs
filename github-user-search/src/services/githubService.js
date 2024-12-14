import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/search/users?q';

/**
 * Fetches users from the GitHub API based on the given search criteria.
 *
 * @param {Object} params - Search parameters.
 * @param {string} params.username - GitHub username to search for.
 * @param {string} [params.location] - Location filter (optional).
 * @param {number} [params.minRepos] - Minimum repository count filter (optional).
 * @param {number} [params.page] - Page number for pagination (optional).
 * @returns {Promise<Object>} - Response data containing the search results.
 */
export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  try {
    // Construct the query string based on the parameters
    let query = `${username ? username : ''}`;

    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Add pagination
    query += `&page=${page}`;

    // Make the API request
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data; // Returns the search result
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
