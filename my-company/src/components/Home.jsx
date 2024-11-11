// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Website!</h1>
      <p style={styles.text}>We are glad to have you here. Explore our services and get in touch with us for more information.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    color: '#4CAF50',
    fontSize: '36px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '18px',
    color: '#333',
  },
};

export default Home;
