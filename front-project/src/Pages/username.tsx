import'./username.css';



function username(){
    return(
        <div className=" user d-flex justify-content-center align-items-center vh-100">
                <div className="overlay position-absolute"></div>
        <div className="form-user text-center">
            <h1  className=' fw-bold'> CHOOSE YOUR NEW USERNAME</h1>
            <form action="post">
                <label className=' m-4  ' htmlFor=""><h3>Username:</h3></label>
                <br />
                <input className=' mb-3 border-0 border-bottom border-black w-50' type="text" /> <br />
                <button className='continue-button  border-1 border-black '>continue</button>
            </form>
        </div>
    </div>
    )
}
export default username;