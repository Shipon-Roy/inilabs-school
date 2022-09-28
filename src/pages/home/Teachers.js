import React from "react";
import teachers1 from "../../images/teacher1.png";
import teachers2 from "../../images/teacher2.png";
import teachers3 from "../../images/teacher3.png";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

const Teachers = () => {
  return (
    <div className="teachers">
      <div className="container">
        <h2>Our Teachers</h2>
        <div className="row">
          <div className="teacher__content col-md-4">
            <img className="img" src={teachers1} alt="" />
            <div className="info">
              <div className="icons">
                <ImFacebook2 className="footer__content-right-icons" />
                <FaTwitterSquare className="footer__content-right-icons" />
                <FaInstagramSquare className="footer__content-right-icons" />
                <BsLinkedin className="footer__content-right-icons" />
                <IoLogoYoutube className="footer__content-right-icons" />
              </div>
            </div>
            <h3>Cooper Donin</h3>
            <p>Head of Operation</p>
          </div>
          <div className="teacher__content col-md-4">
            <img className="img" src={teachers2} alt="" />
            <div className="info">
              <div className="icons">
                <ImFacebook2 className="footer__content-right-icons" />
                <FaTwitterSquare className="footer__content-right-icons" />
                <FaInstagramSquare className="footer__content-right-icons" />
                <BsLinkedin className="footer__content-right-icons" />
                <IoLogoYoutube className="footer__content-right-icons" />
              </div>
            </div>
            <h3>Anika Baptista</h3>
            <p>Art Teacher</p>
          </div>
          <div className="teacher__content col-md-4">
            <img className="img" src={teachers3} alt="" />
            <div className="info">
              <div className="icons">
                <ImFacebook2 className="footer__content-right-icons" />
                <FaTwitterSquare className="footer__content-right-icons" />
                <FaInstagramSquare className="footer__content-right-icons" />
                <BsLinkedin className="footer__content-right-icons" />
                <IoLogoYoutube className="footer__content-right-icons" />
              </div>
            </div>
            <h3>Kaiya Bator</h3>
            <p>Spanish Teacher</p>
          </div>
        </div>
        <div className="tc-btn">
          <button className="t-btn">see all teachers <BsArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
