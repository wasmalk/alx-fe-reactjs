import React from 'react';

const UserCard = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
