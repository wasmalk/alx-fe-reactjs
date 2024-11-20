import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Check if email is empty
    if (!email) {
      newErrors.email = 'Email is required';
    }

    // Check if password is empty
    if (!password) {
      newErrors.password = 'Password is required';
    }

    // Check if username is empty
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Check email format
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email format is invalid';
    }

    // Password length check
    if (password && password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form data submitted:', { username, email, password });
      alert('Registration successful!');
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Register</h2>

      {/* Username Field */}
      <div style={fieldStyle}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <span style={errorStyle}>{errors.username}</span>}
      </div>

      {/* Email Field */}
      <div style={fieldStyle}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}
      </div>

      {/* Password Field */}
      <div style={fieldStyle}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}
      </div>

      {/* Submit Button */}
      <button type="submit" style={buttonStyle}>
        Register
      </button>
    </form>
  );
};

// Styles for simplicity
const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  background: '#f9f9f9',
};

const fieldStyle = {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.8rem',
};

const buttonStyle = {
  padding: '10px 20px',
  background: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default RegistrationForm;
