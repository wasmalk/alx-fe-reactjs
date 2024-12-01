import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";

// Profile Details Component
const ProfileDetails = ({ user }) => (
  <div>
    <h2>Profile Details</h2>
    <p>Name: {user?.name}</p>
    <p>Email: {user?.email}</p>
    <p>Username: {user?.username}</p>
    <p>Phone: {user?.phone}</p>
  </div>
);

// Profile Settings Component
const ProfileSettings = () => (
  <div>
    <h2>Profile Settings</h2>
    <p>Settings options will go here.</p>
  </div>
);

// Main Profile Component
const Profile = () => {
  const { userId } = useParams(); // Extract userId from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate an API call
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          {/* Navigation Links for Nested Routes */}
          <nav>
            <ul>
              <li>
                <Link to="">Details</Link>
              </li>
              <li>
                <Link to="settings">Settings</Link>
              </li>
            </ul>
          </nav>

          {/* Nested Routes */}
          <Routes>
            <Route path="/" element={<ProfileDetails user={user} />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Routes>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
