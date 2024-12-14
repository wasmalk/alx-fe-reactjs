import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_KEY;

// Configure Axios instance
const axiosInstance = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : undefined,
  },
});

/**
 * Fetch user data based on advanced search criteria.
 * @param {Object} params - The search parameters.
 * @param {string} params.username - The GitHub username (required).
 * @param {string} params.location - The location of the user (optional).
 * @param {number} params.minRepos - The minimum number of public repositories (optional).
 * @returns {Promise<Object>} - The search result containing user details.
 */
export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Construct the query for the search API
    let query = `q=${username ? `user:${username}` : ''}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Make a GET request to the Search API
    const response = await axiosInstance.get(`/search/users?${query}`);
    const users = response.data.items;

    // If users are found, fetch full details of the first matching user
    if (users && users.length > 0) {
      const userDetails = await axiosInstance.get(`/users/${users[0].login}`);
      return userDetails.data;
    }

    // Return null if no matching users are found
    throw new Error('No users match the specified criteria.');
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
};
