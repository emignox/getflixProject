import "./privacy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { faCookie } from "@fortawesome/free-solid-svg-icons";

function privacy() {
  return (
    <div className="titles">
      <svg
        className="logo1 m-1"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 181 222"
        fill="none"
      >
        <path
          d="M158.503 95.6644C169.145 103.302 169.048 119.164 158.314 126.671L75.1075 184.863C62.4707 193.7 45.1248 184.597 45.2187 169.177L45.9336 51.7838C46.0275 36.3636 63.483 27.4723 76.0112 36.4633L158.503 95.6644Z"
          fill="#80B3FF"
        />
        <path
          d="M88.7752 75C93.0118 75 96.9077 75.5926 100.463 76.7776C104.018 77.9627 107.218 78.733 110.062 79.0885C108.492 84.5991 108.432 90.5392 109.884 96.9089C108.373 98.1829 106.64 98.9235 104.685 99.1309C104.448 98.568 104.018 97.3978 103.396 95.6202C102.803 93.8129 102.226 92.3316 101.663 91.1762C101.129 90.0207 100.374 88.7023 99.3963 87.221C98.4483 85.7397 97.1743 84.5694 95.5745 83.7103C94.0043 82.8215 92.197 82.2141 90.1528 81.8882C87.1605 82.1549 84.8496 83.0733 83.2202 84.6435C81.5907 86.2137 80.776 88.2431 80.776 90.7318C80.776 93.2797 81.4278 95.3831 82.7313 97.0422C84.0349 98.6717 85.7236 99.9012 87.7975 100.731C89.901 101.531 92.2119 102.242 94.7301 102.864C97.2484 103.456 99.7518 104.197 102.24 105.086C104.729 105.945 107.01 107.086 109.084 108.508C111.188 109.9 112.891 111.989 114.195 114.774C115.498 117.559 116.15 120.951 116.15 124.951C116.15 129.809 114.743 133.987 111.928 137.483C109.114 140.979 105.796 143.482 101.974 144.993C98.152 146.504 94.2413 147.259 90.2417 147.259C81.4426 147.259 72.7323 145.319 64.111 141.438C64.2888 137.616 64.3776 135.275 64.3776 134.416C64.3776 129.617 63.9184 124.462 63 118.951C65.6664 117.677 68.6439 117.618 71.9324 118.773C73.0286 125.499 75.1469 130.654 78.2873 134.238C81.4574 137.823 84.9237 139.823 88.6863 140.238C92.2119 140.001 94.9227 138.86 96.8188 136.816C98.7445 134.742 99.7074 132.12 99.7074 128.95C99.7074 126.284 99.0852 124.032 97.8409 122.195C96.5966 120.329 94.9523 118.892 92.9081 117.885C90.8638 116.848 88.6418 115.914 86.2421 115.085C83.872 114.255 81.4722 113.381 79.0428 112.463C76.6134 111.515 74.3766 110.389 72.3324 109.085C70.3178 107.782 68.6883 105.96 67.444 103.619C66.1997 101.279 65.5775 98.4347 65.5775 95.0869C65.5775 92.065 66.0515 89.3541 66.9996 86.9544C67.9773 84.5546 69.2364 82.6289 70.777 81.1772C72.3472 79.7255 74.1692 78.5108 76.2431 77.5331C78.3466 76.5554 80.4205 75.8888 82.4647 75.5333C84.5386 75.1778 86.642 75 88.7752 75ZM88.7752 76.8221C86.2865 76.8221 83.872 77.1183 81.5315 77.7109C79.191 78.2738 76.9097 79.207 74.6877 80.5106C72.4953 81.8142 70.7325 83.7251 69.3994 86.2433C68.0662 88.7616 67.3996 91.7094 67.3996 95.0869C67.3996 98.0792 68.0217 100.657 69.266 102.819C70.5103 104.953 72.1398 106.612 74.1544 107.797C76.1987 108.982 78.4355 110.034 80.8649 110.952C83.2942 111.841 85.694 112.744 88.0641 113.663C90.4639 114.581 92.6859 115.618 94.7301 116.774C96.7744 117.929 98.4186 119.544 99.6629 121.618C100.907 123.662 101.529 126.106 101.529 128.95C101.529 132.89 100.27 136.075 97.752 138.505C95.2338 140.934 91.6638 142.149 87.042 142.149C82.598 142.149 78.4651 140.297 74.6433 136.594C70.8214 132.89 68.3032 127.35 67.0885 119.973C66.4959 119.588 65.7997 119.588 64.9998 119.973C65.7997 124.625 66.1997 129.439 66.1997 134.416C66.1997 135.809 66.1404 137.779 66.0219 140.327C73.3693 143.734 80.376 145.437 87.042 145.437C92.5526 145.437 97.6483 143.808 102.329 140.549C107.01 137.26 109.351 132.668 109.351 126.773C109.351 123.425 108.699 120.595 107.395 118.285C106.092 115.944 104.388 114.122 102.285 112.818C100.181 111.515 97.8705 110.389 95.3523 109.441C92.834 108.493 90.3306 107.604 87.8419 106.775C85.3533 105.915 83.0572 104.967 80.9537 103.93C78.8799 102.893 77.1912 101.427 75.8876 99.5309C74.584 97.6051 73.9322 95.2795 73.9322 92.5538C73.9322 88.732 75.221 85.6804 77.7985 83.3992C80.376 81.1179 84.0349 79.9773 88.7752 79.9773C97.0114 79.9773 102.685 85.6804 105.796 97.0867C106.714 97.2348 107.351 97.0274 107.707 96.4645C106.729 89.2356 104.581 84.1547 101.263 81.2216C97.9742 78.2886 93.8117 76.8221 88.7752 76.8221Z"
          fill="#130E0E"
        />
      </svg>
      <svg className="text1" viewBox="0 0 1320 300">
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          Streamify
        </text>
      </svg>
      <h1 className="text-center   fw-bold text-black  m-5">PRIVACY POLICY </h1>

      <div className="icone1">
        {" "}
        <Link className=" nav-link" to="../app.tsx">
          <FontAwesomeIcon icon={faArrowLeft} className=" m-2   fs-6  icone2" />{" "}
          click to go back
        </Link>
      </div>
      <div className="    container-fluid fs-4 w-75 text-center ">
        <p className=" pt-4">
          <h1>
            Welcome to <span>Streamify</span>!
          </h1>{" "}
          Your privacy is important to us. On this page, we provide you with all
          the necessary information on how we collect, use, disclose, and
          protect your personal information.
        </p>
      </div>
      <div className="    container-fluid text-center fs-4 w-75  ">
        <p className=" pt-4 mt-5">
          <FontAwesomeIcon icon={faInfoCircle} className="fs-1" />
          <h1>Collection of Information </h1>We collect information that you
          voluntarily provide when interacting with our website. This may
          include your name, email address, and other personal information you
          provide during registration or through forms on our site.
        </p>
      </div>
      <div className="diagonal-box">
        <div className="content fs-4 w-75 text-center  mt-5 ">
          <h1> Use of Information</h1>
          The collected information is used to personalize your experience on
          our site, improve our services, and send you relevant information. We
          will never share your information with third parties without your
          consent.
          <p className="  pt-4 mt-5">
            <FontAwesomeIcon icon={faShieldAlt} />
            <h1>Protection of Information </h1>We collect information that We
            take security measures to protect your personal information and
            ensure that it is treated securely and in compliance with applicable
            privacy laws.
          </p>
        </div>
      </div>
      <div className="    container-fluid text-center fs-4 w-75 mb-5  ">
        <p className="  pt-4 mt-5">
          <FontAwesomeIcon icon={faCookie} />
          <h1>Cookies</h1>
          Our site uses cookies to enhance your browsing experience. You can
          control cookie acceptance through your browser settings.
        </p>
        <p>
          <h1> Links to Third-Party </h1> <br /> Sites Our site may contain links to third-party
          websites. We are not responsible for the privacy practices of such
          sites, and we recommend reading their privacy policies. <br /> <h1>Changes to the
          Privacy Policy </h1> <br /> We reserve the right to make changes to this Privacy
          Policy. Changes will be posted on this page, so we encourage you to
          check it regularly. Contact Us For questions or clarifications about
          our Privacy Policy, <h1>contact us </h1> <br /> at <a href="#">emanuele971@icloud.com </a><br /> Thank
          you for trusting our site! 
        </p>
      </div>
    </div>
  );
}
export default privacy;
