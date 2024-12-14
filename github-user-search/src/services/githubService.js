import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/users';

/**
 * Fetch user data from GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - The user data from the API.
 * @throws {Error} - Throws an error if the API call fails.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data; // Return the user data
  } catch (error) {
    console.error(`Error fetching user data for username: ${username}`, error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
