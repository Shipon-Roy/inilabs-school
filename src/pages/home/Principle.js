import React from "react";
import principle from "../../images/principle.png";

const Principle = () => {
  return (
    <div className="principle">
      <div className="container">
        <div className="row">
          <div className="principle__content-left col-md-5">
            <img src={principle} alt="" />
          </div>
          <div className="principle__content-right col-md-7">
            <h5>Wise Words From Principle</h5>
            <p>
              “iNiLabs School is a welcoming Catholic community renowned for its
              integrity and creative learning approaches that bring out the best
              in boys. Our rich Salesian charism underpinned by the educational
              principles of founder, St John Bosco, provides the foundation of a
              future focused pedagogical vision.”
            </p>
            <div className="principle__content-name">
                <h6>Jonathon Doe</h6>
                <p>Principle, iNiLabs School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principle;
