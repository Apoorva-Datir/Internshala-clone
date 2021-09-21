import React from "react";
import "../style/MainBody.css";
import darkCheck from "../assets/check_box_dark.svg";
import whiteCheck from "../assets/check_box_white.svg";
import Corousel from "./Corousel";
function MainBody() {
  return (
    <div>
      <div className="searchsec">
        <div className="searchbox">
          <input
            type="text"
            name="Search"
            id="searchbar"
            placeholder="What are you looking for?"
          />
          <button className="searchbtn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <Corousel />

      <div className="popular">
        <h2>Internships</h2>
        <p>
          Apply to 10,000+ internships for free
          <a href="/">
            {" "}
            View all internships <i className="fas fa-arrow-right"></i>
          </a>
        </p>
        <h4>Popular cities</h4>
        <div className="cardholder">
          <a href="/">
            <img
              src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg"
              alt="Work from home"
            />
            <p className="text">Work from home</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg" />
            <p className="text">Delhi/NCR</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/bangalore.svg" />
            <p className="text">Bangalore</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/mumbai.svg" />
            <p className="text">Mumbai</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/hyderabad.svg" />
            <p className="text">Hyderabad</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/chennai.svg" />
            <p className="text">Chennai</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/kolkata.svg" />
            <p className="text">Kolkata</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/international.svg" />
            <p className="text">International</p>
          </a>
        </div>

        <h4>Popular categories</h4>
        <div className="cardholder">
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/part_time.svg" />
            <p className="text">Part-time</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/engineering.svg" />
            <p className="text">Engineering</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/ngo.svg" />
            <p className="text">NGO</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/mba.svg" />
            <p className="text">MBA</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/design.svg" />
            <p className="text">Design</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/science.svg" />
            <p className="text">Science</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/media.svg" />
            <p className="text">Media</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/internships/categories/humanities.svg" />
            <p className="text">Humanities</p>
          </a>
        </div>

        <h2>Internshala Trainings</h2>
        <p>
          Learn new-age skills on the go
          <a href="/">
            {" "}
            View all trainings <i className="fas fa-arrow-right"></i>
          </a>
        </p>
        <div className="cardholder">
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/programming_with_python.svg" />
            <p className="text">
              programming <br /> with python
            </p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/digital_marketing.svg" />
            <p className="text">
              Digital <br /> Marketing
            </p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/web_development.svg" />
            <p className="text">
              Web <br /> Development
            </p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/machine_learning.svg" />
            <p className="text">
              Machine <br /> Learning
            </p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/advanced_excel.svg" />
            <p className="text">Advanced Excel</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/ethical_hacking.svg" />
            <p className="text">Ethical Hacking</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/autocad.svg" />
            <p className="text">AutoCAD</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/trainings/icons/creative_writing.svg" />
            <p className="text">Creative writing</p>
          </a>
        </div>
        <h6>& 52 More...</h6>

        <h2>
          Fresher Jobs <span>New</span>
        </h2>
        <p>
          Premium fresher jobs on your fingertips
          <a href="/">
            {" "}
            View all Jobs <i className="fas fa-arrow-right"></i>
          </a>
        </p>
        <div className="jobcrd">
          <a href="/">
            <img src="https://internshala.com/static/images/home/jobs/perks/ctc.svg" />
            <p className="text">Minimum CTC of 3 LPA</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/jobs/perks/dream.svg" />
            <p className="text">Dream companies</p>
          </a>
          <a href="/">
            <img src="https://internshala.com/static/images/home/jobs/perks/verified.svg" />
            <p className="text">100% verified jobs</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
