// About.jsx
import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>We are a dedicated team committed to providing top-notch services. Our company values integrity, innovation, and customer satisfaction.</p>
      <p style={styles.text}>With over 10 years of experience in the industry, we strive to deliver excellence in every project we take on.</p>
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
    marginBottom: '15px',
  },
};

export default About;
