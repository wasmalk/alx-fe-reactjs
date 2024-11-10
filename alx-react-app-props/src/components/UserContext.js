// ProfilePage.jsx
import React from 'react';
import UserContext from './UserContext'; // Import UserContext

function ProfilePage() {
  return (
    <UserContext.Consumer>
      {userData => (
        <div>
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default ProfilePage;
// UserContext.js
import React, { createContext, useContext } from 'react';

// Create the context
export const UserContext = createContext();

// Custom hook to access the user data from the context
export const useUserData = () => {
  return useContext(UserContext);
};

// Export the UserContext provider
export const UserProvider = ({ children }) => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};
