import React from "react";
import darkCheck from "../assets/check_box_dark.svg";
import whiteCheck from "../assets/check_box_white.svg";
import "../style/MainBody.css";
function Corousel() {
  return (
    <div
      class="carousel"
      data-flickity='{ "wrapAround": true ,"autoPlay": true}'
    >
      <div className="carousel-cell">
        <div id="cell1">
          <h3>Introducing</h3>
          <h1>
            Fresher Jobs <span>New</span>
          </h1>
          <h3>Apply to premium fresher jobs for free</h3>
          <h4 style={{ marginTop: 16 }}>
            <img src={whiteCheck} />
            Minimum CTC 3 LPA
          </h4>
          <h4>
            <img src={whiteCheck} />
            100% Verified jobs
          </h4>
          <p style={{ color: "white" }}>View Jobs</p>
        </div>
      </div>
      <div className="carousel-cell">
        <div id="cell2">
          <h2>Get ahead. Get an Internship!</h2>
          <h4 style={{ marginTop: 20 }}>
            <img src={darkCheck} /> 10,000+ internships with stipend
          </h4>
          <h4>
            <img src={darkCheck} /> 100% Verified
          </h4>
          <h4>
            <img src={darkCheck} /> Apply for free
          </h4>
          <p style={{ color: "#008bdc" }}>View internships</p>
        </div>
      </div>
      <div className="carousel-cell">
        <div id="cell3" />
      </div>
    </div>
  );
}

export default Corousel;
