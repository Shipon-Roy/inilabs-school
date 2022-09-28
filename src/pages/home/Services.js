import React from "react";
import services1 from "../../images/services1.png";
import services2 from "../../images/services4.png";
import services3 from "../../images/services2.png";
import services4 from "../../images/services3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="row">
        <div className="s-bgwhte col-md-3">
          <img src={services1} alt="" />
          <p>
            Education in English: Cambridge International Programme and
            qualified native english speaking teachers.
          </p>
        </div>
        <div className="s-bgorg col-md-3">
        <img src={services2} alt="" />
          <p>
            Education in English: Cambridge International Programme and
            qualified native english speaking teachers.
          </p>
        </div>
        <div className="s-bgwhte col-md-3">
        <img src={services3} alt="" />
          <p>
            Education in English: Cambridge International Programme and
            qualified native english speaking teachers.
          </p>
        </div>
        <div className="s-bgorg col-md-3">
        <img src={services4} alt="" />
          <p>
            Education in English: Cambridge International Programme and
            qualified native english speaking teachers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
