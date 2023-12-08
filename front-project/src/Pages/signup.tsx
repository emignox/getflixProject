// import { Link } from 'react-router-dom';
import "./login_singup.css"

function signup() {
  return (
    <body className="overflow-hidden">
      <div className='template d-flex justify-content-center align-items-center vh-100'>
    <div className='col-md-6 d- none d-flex align-items-center h-100'>
      <img src='assets/popcorn2.jpg' alt='Description' className='img-fluid' />
    </div>
    <div className='col-md-6 d-flex flex-column h-100'>
      <div className='p-5 flex-fill'>
        <form className='h-100 d-flex flex-column justify-content-center'>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='Enter your name' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor='firstname'>Firstname</label>
            <input type='text' placeholder='Enter your firstname' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Enter your username' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter email' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter password' className='form-control'/>
          </div>
          <div className='mb-2'>
            <label htmlFor='role'></label>
            <input type="hidden" name="role" value="user"/>
          </div>
          <div className='mt-2 mb-2'>
            <button className='btn'>Sign Up</button>
          </div>
          <p className='text-end mt-2'>
            Already Registered? <a href='login' className='ms-2'>Log in</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</body>

  )
}

export default signup
