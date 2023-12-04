import './login_singup.css'
// import { Link } from 'react-router-dom';
function login() {

  return (
<body className="overflow-hidden">
  <div className='login-page template d-flex justify-content-center align-items-center vh-100'>
    <div className='col-md-6 col-12 d-flex flex-column h-100'>
      <div className='p-5 flex-fill'>
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
            Forgot <a href=''>Password?</a><a href='signup' className='ms-2'>Sign up</a>
          </p>
        </form>
      </div>
    </div>
    <div className='col-md-6 col-12 d-none d-md-flex align-items-center h-100'>
      <img src='assets/popcorn.jpg' alt='Description' className='img-fluid' />        
    </div>
  </div>
</body>

  )
}

export default login
