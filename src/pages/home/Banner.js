import React from "react";
import banner from "../../images/banner.png";
import buttonImg from "../../images/button.png";

const Banner = () => {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src={banner} class="card-img" alt="..." />
        <div class="banner__content card-img-overlay container">
          <span>A TRADITION SINCE 2002</span>
          <div className="row">
            <div className="banner__content-left col-md-6">
              <h1>
                Offering Bright <br /> Futures
              </h1>
              <p>
                iNiLabs School gradutes are styding in the <br /> world’s most
                prestigious universities.
              </p>
              <button className="banner__content-left-btn">Apply Now</button>
            </div>
            <div className="banner__content-right col-md-6">
              <button>
                <img src={buttonImg} alt="" />
              </button>
              <div className="">
                <p>iNiLabs School</p>
                <h6>CAMPUS <br /> TOUR</h6>
                <span>Watch Video (6 Min)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
