import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  // State for storing token
  const [token, setToken] = useState('');

  // Other state variables as before
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Effect to check for a valid token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Token exists, navigate to home or the appropriate authenticated route
      navigate('/home');
    }
  }, [navigate]);

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8888/getflixProject/api/login.php', {
        username: username,
        password: password,
      });

      if (response.data && response.data.message === 'Connexion réussie') {
        const { token, username, role } = response.data;

        // Store the token and user information in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', role);

        // Set the token in state for future use
        setToken(token);

        navigate('/home');
      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear the token and user information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');

    // Remove the token from state
    setToken('');

    // Navigate to the login page or another appropriate route
    navigate('/login');
  };

  return (
    <body className="overflow-hidden">
      <div className='login-page template d-flex justify-content-center align-items-center vh-100'>
        <div className='col-md-6 col-12 d-flex flex-column h-100'>
          <div className='p-5 flex-fill'>
            <form className='h-100 d-flex flex-column justify-content-center' onSubmit={handleLogin}>
              <h3 className='text-center'>Log In</h3>
              <div className='mb-2'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  placeholder='Enter username'
                  className='form-control'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  placeholder='Enter password'
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mt-2 mb-2'>
                <button type='submit' className='btn'>
                  Log in
                </button>
              </div>
              <p className='text-end mt-2'>
                Forgot <Link to={'/forgot-password'}>Password?</Link>
                <a href='signup' className='ms-2'>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className='col-md-6 col-12 d-none d-md-flex align-items-center h-100'>
          <img src='assets/popcorn.jpg' alt='Description' className='img-fluid' />
        </div>
          {/* Conditionally render logout button if token exists */}
          {token && (
          <div>
            <p>Welcome, {localStorage.getItem('username')}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
          )}
      </div>
    </body>
  );
}

export default Login;