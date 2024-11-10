// UserContext.js
import React, { createContext, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Custom hook to access the user data from the context
export const useUserData = () => {
  return useContext(UserContext);
};

// Export the UserContext provider
export const UserProvider = ({ children }) => {
  // Example user data
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
