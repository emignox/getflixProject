import './footer.css';

const Footer = () => {
  return (
    <div className="modal-footer shadow">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <div className="d-flex">
            </div>
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
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>Streamify</p>
            <div className="cursor-pointer">
              <li><a className="link" href="/">Privacy Policy</a></li>
              <li><a className="link" href="/">Cookies</a></li>
              <li><a className="link" href="/">Profil</a></li>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>Help</p>
            <div className="cursor-pointer">
              <li><a className="link" href="/">Sign Up</a></li>
              <li><a className="link" href="/">Sign In</a></li>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mb-4 mt-4">
            <p className="h5 mb-4" style={{ fontWeight: 600 }}>Pages</p>
            <div className="cursor-pointer">
              <li><a className="link" href="/">Home</a></li>
              <li><a className="link" href="/">Movie</a></li>
              <li><a className="link" href="/">Tv Show</a></li>
              <li><a className="link" href="/">Upcoming</a></li>
            </div>
          </div>
        </div>
        <small className="text-center mt-5">&copy; Streamify, 2023. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
