import { useState } from 'react';
import axios from 'axios';
import './reset_forgot.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Send a request to the backend to initiate the forgot password process
      const response = await axios.post('http://localhost:8888/getflixProject/api/forgot_password.php', {
        email: email,
      });
      console.log(response);
      // Handle the response from the server
      if (response.data.success) {
        setMessage('Password reset instructions sent to your email.');
      } else {
        setMessage('Failed to initiate password reset. Please check your email and try again.');
      }
    } catch (error) {
      console.error('Error initiating password reset:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <body className="overflow-hidden">
    <div className='login-page template d-flex justify-content-center align-items-center vh-100'>
      <div className='col-md-6 col-12 d-flex flex-column h-100'>
        <div className='p-5 flex-fill'>
          <form className='h-100 d-flex flex-column justify-content-center'>
            <h3 className='text-center mb-4'>Forgot password</h3>
            <p className='mb-4'>Enter your email address to receive instructions for resetting your password.</p>
            <div className='mb-4'>
              <label htmlFor='email'>Email: </label>
              <input type="email" placeholder='Enter your email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />            
            </div>
            <button className='btn mb-3' onClick={handleForgotPassword}>Reset Password</button>
            <p>{message}</p>
          </form>
        </div>
      </div>
      <div className='img col-md-6 col-12 d-none d-md-flex align-items-center h-100'>
        <img src='assets/forgot.svg' alt='Description' className='img-fluid' />        
      </div>
    </div>
  </body>
  );
};

export default ForgotPassword; 
