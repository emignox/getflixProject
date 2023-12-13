import React, { useState } from 'react';
import axios from 'axios';
import './username.css';
import { Link } from "react-router-dom";

function Email() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.put('https://your-api-url.com/update_profile', {
        email: email,
      });

      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="user d-flex justify-content-center align-items-center vh-100">
      <div className="overlay position-absolute"></div>
      <div className="form-user text-center">
        <h2 className='fw-bold pol'>CHOOSE YOUR NEW EMAIL</h2>
        <form onSubmit={handleSubmit}>
          <label className='m-4' style={{color:'#0071b8'}} htmlFor=""><h3>Email:</h3></label>
          <br />
          <input
            className='mb-3 border-0 border-bottom border-black w-50'
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <button className='continue-button border-1 border-black' type="submit">save</button>
          <button className='continue-button border-1 border-black'>
            <Link className='text-black text-decoration-none' to={'/password'}>continue</Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Email;