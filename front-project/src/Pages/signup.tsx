// import { Link } from 'react-router-dom';
import './login_singup.css'


function signup() {

  return (
<div className='template d-flex justify-content-center align-items-center vh-100 '>
    <div className='col-md-6'>
        <img src='assets/popcorn2.jpg' alt='Description' className='img-fluid' />        
    </div>
    <div className='col-md-6 h-100'>
        <div className='p-5 rounded h-100'>
        <form className='h-100 d-flex flex-column justify-content-center'>
            <h3 className='text-center'>Sign Up</h3>
            <div className='mb-2'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter your name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='Firstname'>Firstname</label>
                <input type='text' placeholder='Enter your firstname' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='username'>username</label>
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
                <button className='btn btn-primary'>Sign Up</button>
            </div>
            <p className='text-end mt-2'>
                Already Registerd<a href='login' className='ms-2'>Log in</a>
            </p>
        </form>
        </div>
    </div>
</div>
  )
}

export default signup
