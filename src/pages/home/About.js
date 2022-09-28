import React from "react";
import aboutImg from "../../images/about.png";
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="about__content-left col-md-6">
          <h3>About School</h3>
          <p>
            iNiLabs School is an independent, non-governmental organisation,
            established to provide high-quality education to local and
            expatriate communities in Bangladesh and United State of America.
          </p>
          <button>Learn More</button>
        </div>
        <div className="about__content-right col-md-6">
          <img src={aboutImg} alt="" />
        </div>
      </div>
      <div className="counter">
        <div className="row">
            <div className="counter__content col-md-4">
                <h2>34</h2>
                <p>Teachers</p>
            </div>
            <div className="counter__content col-md-4">
                <h2>2500+</h2>
                <p>Students</p>
            </div>
            <div className="counter__content col-md-4">
                <h2>1500+</h2>
                <p>Graduates</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
