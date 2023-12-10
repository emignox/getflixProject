import'./username.css';
import { Link } from "react-router-dom";



function email(){
    return(
        <div className=" user d-flex justify-content-center align-items-center vh-100">
                <div className="overlay position-absolute"></div>
        <div className="form-user text-center">
            <h2  className=' fw-bold'> CHOOSE YOUR NEW EMAIL</h2>
            <form action="post">
                <label className=' m-4  ' htmlFor=""><h3>E-mail</h3></label>
                <br />
                <input className=' mb-3 border-0 border-bottom border-black w-50' type="text" /> <br />
                <button className='continue-button  border-1 border-black '> save </button>
                <button className='continue-button  border-1 border-black '>  <Link to={'/password'}></Link> continue</button>

            </form>
        </div>
    </div>
    )
}
export default email;