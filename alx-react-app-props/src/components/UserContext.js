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
