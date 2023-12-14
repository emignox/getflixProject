import { useState } from 'react';
import "./username.css";
import { Link } from "react-router-dom";

function accessData() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && email && password) {
      alert("Data has been saved.");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="user d-flex justify-content-center align-items-center vh-100">
      <div className="overlay position-absolute"></div>
      <div className="form-user text-center">
        <h2 className="fw-bold pol">Choose you new Username</h2>
        <form onSubmit={handleSubmit}>
          <label className="m-4" style={{ color: "#0071b8" }} htmlFor="">
            <h3>Username:</h3>
          </label>
          <br />
          <input
            className="mb-3 border-0 border-bottom border-black w-50"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <h2 className="fw-bold pol">Choose your new Email</h2>
          <label className="m-4" style={{ color: "#0071b8" }} htmlFor="">
            <h3>Email:</h3>
          </label>
          <br />
          <input
            className="mb-3 border-0 border-bottom border-black w-50"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <h2 className="fw-bold pol">Choose your new Password</h2>
          <label className="m-4" style={{ color: "#0071b8" }} htmlFor="">
            <h3>Password:</h3>
          </label>
          <br />
          <input
            className="mb-3 border-0 border-bottom border-black w-50"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="continue-button border-1 border-black"
            type="submit"
          >
            save
          </button>
          <Link className="  fs-6  text-decoration-none"  style={{color:'#0071b8'}} to={"/home"}>
            {" "}
            Go back to the Home page
          </Link>
        </form>
      </div>
    </div>
  );
}

export default accessData;