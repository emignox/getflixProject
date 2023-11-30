// Install axios if you haven't already
// npm install axios @types/axios

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8888/getflixProject/api/login.php',
        { username, password }
      );
      console.log('Login successful:', response.data);
      // Handle success (e.g., redirect, set user state, etc.)
    } catch (error) {
      console.log(error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
