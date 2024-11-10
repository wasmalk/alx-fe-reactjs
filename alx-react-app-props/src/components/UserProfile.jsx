// src/components/UserProfile.jsx
const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};
// UserProfile.jsx
import React, { useContext } from 'react';  // Import React and useContext
import { UserContext } from './UserContext';  // Import UserContext

function UserProfile() {
  // Use the useContext hook to consume userData from the UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h1>Name: {userData.name}</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;

