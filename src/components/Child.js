import React, { useState } from 'react';

function Child(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin();
  };

  if (props.isLoggedIn) {
    return <p>You are logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display:'flex', flexDirection:'column', gap:'1rem'
    }}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit" style={{width:'100px', height:'30px'}}>Login</button>
    </form>
  );
}

export default Child;
