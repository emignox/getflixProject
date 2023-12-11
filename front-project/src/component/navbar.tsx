import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function NavScrollExample() {

  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear the token and user information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');

    // Navigate to the login page or another appropriate route
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="cl ">
      <Container fluid className="cl p-0 m-0">
        <Navbar.Brand href="">
        
          <span className="streamify  mx-3 ">streamify</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className=" rounded-5 mx-3 p-3 border"   style={{
                backgroundColor: "rgba(83, 187, 144, 0.7)",
              }}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className="dim mx-3 "
              style={{
                color: "#53bb90 ",
              }}
              href="/home"
            >
             HOME
            </Nav.Link>
            <Nav.Link className="dim mx-3" href="/movies"  style={{
                color: "#53bb90 ",
              }}>
              MOVIES
            </Nav.Link>
            <Nav.Link className="dim mx-3" href="/series"  style={{
                color: "#53bb90 ",
              }}>
              SERIES
            </Nav.Link>
            <Nav.Link className="dim mx-3 " href="/upcoming"  style={{
                color: "#53bb90 ",
              }}
              >
                UPCOMING
            </Nav.Link>
          </Nav>
          <div className="container-fluid w-25">
            <form className="d-flex">
              <input
                className=" input form-control  me-2  rounded-pill border-1    min   "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className=" d-flex">
            <button className="registration  px-3" type="button" onClick={handleLogout}>
              Log Out
            </button>
            <Link className="nav-link" to="/profile">
              <FontAwesomeIcon icon={faUser} className="mx-4" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
