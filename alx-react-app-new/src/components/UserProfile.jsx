import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '5px' }}>{props.name}</h2>
      <p style={{ fontSize: '1.1em', margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkslategray' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '1em', color: 'dimgray', margin: '5px 0' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
