// Services.jsx
import React from 'react';

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>Web Development</li>
        <li style={styles.listItem}>App Development</li>
        <li style={styles.listItem}>SEO Optimization</li>
        <li style={styles.listItem}>Digital Marketing</li>
        <li style={styles.listItem}>Consulting</li>
      </ul>
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
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
};

export default Services;
