import React from "react";
import {GoLocation} from "react-icons/go";
import {MdWifiCalling3} from "react-icons/md";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import {IoLogoYoutube} from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content row">
          <div className="footer__content-left col-md-4">
            <p>
              iNiLabs School is an independent, non-governmental organisation,
              established to provide high-quality education to local and
              expatriate communities in Bangladesh and United State of America.
            </p>
            <span>
                <GoLocation className="footer__content-left-location" />
              Plot:25, Road:05, Block:A, Mirpur-2 <br />
              Dhaka, Bangladesh
            </span>
            <span><MdWifiCalling3 className="footer__content-left-call" />01236547892</span>
          </div>
          <div className="footer__content-meddle col-md-4">
            <ul>
                <li>Apply Now</li>
                <li>Get Result</li>
                <li>Events</li>
                <li>Gallery</li>
                <li>About School</li>
                <li>Contact</li>
            </ul>
          </div>
          <div className="footer__content-right col-md-4">
            <h6>Follow Us</h6>
            <div>
            <ImFacebook2 className="footer__content-right-icons" />
            <FaTwitterSquare className="footer__content-right-icons" />
            <FaInstagramSquare className="footer__content-right-icons" />
            <BsLinkedin className="footer__content-right-icons" />
            <IoLogoYoutube className="footer__content-right-icons" />
            </div>
            <p>2022 iNiLabs School</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
