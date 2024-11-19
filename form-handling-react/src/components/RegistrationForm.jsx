import React, { useState } from 'react';

const RegistrationForm = () => {
  // Individual state for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for managing errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', { username, email, password });

      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
      alert('Registration successful!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
