import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-center text-white bg-dark"
      //   style={{ backgroundColor: "#000000" }}
    >
      {/* <!-- Grid container className= */}
      <div>
        {/* <!-- Section: Social media className= */}
        <section>
          {/* <!-- Facebook className= */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaFacebook />
          </a>

          {/* <!-- Twitter className= */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaTwitter />
          </a>

          {/* <!-- Google className= */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaGoogle />
          </a>

          {/* <!-- Instagram className= */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaInstagram />
          </a>

          {/* <!-- Linkedin className= */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaLinkedin />
          </a>
          {/* <!-- Github className= */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FaGithub />
          </a>
        </section>
        <div className="text-center text-light p-1">
          <small>© 2023 Copyright comming soon</small>
        </div>
        {/* <!-- Section: Social media className= */}
      </div>
      {/* <!-- Grid container className= */}
      {/* <!-- Copyright className= */}

      {/* <!-- Copyright className= */}
    </footer>
  );
};

export default Footer;
