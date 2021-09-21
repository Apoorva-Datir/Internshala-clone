import React from "react";
import "../style/Navbar.css";
function Navbar() {
  return (
    
    <header>
      <div className="nav">
        <div className="logo">
          <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" 
          alt="internshala logo"/>
        </div>

        <ul className="menu">
          <li>
            <a className="mlink" href="/">
              Internships <i className="fas fa-caret-down"></i>
              <i className="fas fa-caret-up"></i>
            </a>
            <span className="list">
              <div className="listsec1">
                <div className="listclmn">
                  <h4>Location</h4>
                  <a href="/">Work from Home</a>
                  <a href="/">Internship in Bangalore</a>
                  <a href="/">Internship in Delhi</a>
                  <a href="/">Internship in Hyderabad</a>
                  <a href="/">Internship in Mumbai</a>
                  <a href="/">Internship in Chennai</a>
                  <a href="/">Internship in Pune</a>
                  <a href="/">Internship in Kolkata</a>
                  <a href="/">Internship in Jaipur</a>
                  <a href="/">International Internship</a>
                </div>
                <div className="listclmn">
                  <h4>Profile</h4>
                  <a href="/">Computer Science Internship</a>
                  <a href="/">Marketing Internship</a>
                  <a href="/">Finance Internship</a>
                  <a href="/">Mechanical Internship</a>
                  <a href="/">HR Internship</a>
                  <a href="/">Digital Marketing Internship</a>
                  <a href="/">Electronics Internship</a>
                  <a href="/"> Content Writing Internship</a>
                  <a href="/">Civil Internship</a>
                  <a href="/">Campus Ambassador Program</a>
                </div>
                <div className="listclmn">
                  <h4>Category</h4>
                  <a href="/">Engineering Internship</a>
                  <a href="/">MBA Internship</a>
                  <a href="/">Part-Time Jobs/Internship</a>
                  <a href="/">Graphic Design Internship</a>
                  <a href="/">Humanities Internship</a>
                  <a href="/">Science Internship</a>
                  <a href="/">Law Internship</a>
                  <a href="/"> Architecture Internship</a>
                  <a href="/">Internship with Job Offer</a>
                  <a href="/">Internships for Women</a>
                </div>
              </div>
              <div className="listsec2">
                <a href="/">
                  View all internships <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </span>
          </li>
          <li>
            <a className="mlink" href="/">
              Online Tranings <span>75% OFF</span>{" "}
              <i className="fas fa-caret-down"></i>
              <i className="fas fa-caret-up"></i>
            </a>
            <span className="list" id="list2">
              <div className="listclmn">
                <a href="/">Programming</a>
                <a href="/">Business & Management</a>
                <a href="/">Core Engineering</a>
                <a href="/">Data Science</a>
                <a href="/">Design</a>
                <a href="/">Creative Arts</a>
                <a href="/">Language</a>
                <a href="/">Career Development</a>
                <a href="/">Architecture</a>
                <a href="/">Specializations</a>
              </div>
              <div className="listclmn">
                <a href="/">Graphic Design</a>
                <a href="/">UI/UX Design</a>
                <a href="/">Video Editing</a>
                <a href="/">Animation</a>
                <a href="/">WordPress</a>
                <a href="/">Digital Art</a>
                <a href="/">Color Theory</a>
              </div>
            </span>
          </li>
          <li id="l3">
            <a className="mlink" href="/">
              Freshers Jobs
            </a>
          </li>
          <li id="l4">
            <a className="mlink" href="/">
              Login
            </a>
          </li>
          <li id="l5">
            <a className="mlink" href="/">
              Register <i className="fas fa-caret-down"></i>
              <i className="fas fa-caret-up"></i>
            </a>
            <span className="list" id="l5drplst">
              <a href="/">As a Student</a>
              <a href="/">As an Employer</a>
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
