import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import logo2 from "../images/iNilabs.png";
import logo3 from "../images/School.png";
import { FiLogIn } from "react-icons/fi";

const Navber = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="n-logo" src={logo} alt="" />
            <div className="t-logo">
              <img src={logo2} alt="" /> <br />
              <img src={logo3} alt="" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teachers">
                  Teachers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event">
                  Event
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admission">
                  Admission
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/login">
            <button className="n-btn">
              <FiLogIn />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
