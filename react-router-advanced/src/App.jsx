import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Profile from "./Profile";
import BlogPost from "./BlogPost"; // Import the BlogPost component
import ProtectedRoute from "./ProtectedRoute"; // Ensure this component is properly implemented

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/blog/1">Blog Post</a></li> {/* Example blog link */}
            </ul>
          </nav>

          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Protected Routes */}
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
