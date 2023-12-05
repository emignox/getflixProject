import './login_singup.css'
import { Link } from 'react-router-dom';
function login() {

  return (
<div className='login-page template d-flex justify-content-center align-items-center vh-100'>
    <div className='col-md-6 h-100'>
        <div className='p-5 rounded h-100'>
            <form className='h-100 d-flex flex-column justify-content-center'>
                <h3 className='text-center'>Log In</h3>
                <div className='mb-2'>
                    <label htmlFor='username'>Username</label>
                    <input type='username' placeholder='Enter username' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter password' className='form-control'/>
                </div>
                <div className='mt-2 mb-2'>
                    <button className='btn'>Log in</button>
                </div>
                <p className='text-end mt-2'>
                    Forgot <Link to={'/forgot-password'}>Password?</Link><a href='signup' className='ms-2'>Sign up</a>
                </p>
            </form>
        </div>
    </div>
        <div className='col-md-6'>
        <img src='assets/popcorn.jpg' alt='Description' className='img-fluid' />        
        </div>
</div>
  )
}

export default login
