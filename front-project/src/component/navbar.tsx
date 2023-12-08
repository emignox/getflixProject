import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="cl ">
      <Container fluid className="cl p-0 m-0">
        <Navbar.Brand href="#">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="dim" href="../home.tsx">
              Home
            </Nav.Link>
            <Nav.Link className="dim" href="#action2">
              Movies
            </Nav.Link>
            <Nav.Link className="dim" href="#action1">
              Series
            </Nav.Link>
            <Nav.Link className="dim" href="#action2">
              Upcoming
            </Nav.Link>
          </Nav>
          <div className="container-fluid w-25">
            <form className="d-flex">
              <input
                className=" input form-control  me-2  rounded-pill border-1  min  border-dark "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className=" d-flex">
            <button className="registration  px-3" type="submit">
              Log Out
            </button>
            <Link className="nav-link" to="./profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
