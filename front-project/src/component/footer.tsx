import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="modal-footer shadow ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <div className="d-flex"></div>
            <div className="d-flex justify-content-center">
              <button className="btn">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn mx-3">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn p-2">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>
              Streamify
            </p>
            <div className="cursor-pointer">
              <li className="liste1">
                <Link className="" to="/privacy">
                  Privacy policy
                </Link>
              </li>
              <li className="liste1">
               <Link to={'/'}>cookie</Link>
              </li>
              <li className="liste1">
                <Link className="link" to="/profile">
                  Profile
                </Link>
              </li>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>
              Help
            </p>
            <div className="cursor-pointer">
              <li className="liste1">
                <Link className="link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="liste1">
                <Link className="link" to="/login">
                  Sign In
                </Link>
              </li>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>
              Pages
            </p>
            <div className="cursor-pointer">
              <li className="liste1">
                <Link className="link" to="/home">
                  Home
                </Link>
              </li>
              <li className="liste1">
                <Link className="link" to="/movies">
                  Movie
                </Link>
              </li>
              <li className="liste1">
                <Link className="link" to="/series">
                  Tv Show
                </Link>
              </li>
              <li className="liste1">
                <Link className="link" to="/upcoming">
                  Upcoming
                </Link>
              </li>
            </div>
          </div>
        </div>
        <small className="text-center mt-5">
          &copy; Streamify, 2023. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;