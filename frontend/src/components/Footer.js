import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid grid-col-3">
        <div className="footer-links">
          <ul className="footer-links__links">
            <li>
              <a href="/" className="footer-links__link">
                Home
              </a>
            </li>
            <li>
              <a href="/courses.html" className="footer-links__link">
                Courses
              </a>
            </li>
            <li>
              <a href="/about.html" className="footer-links__link">
                About
              </a>
            </li>
            <li>
              <a href="/contact.html" className="footer-links__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div></div>
        <div className="address">
          <p className="secondary-description">+91-8899774455</p>
          <p className="secondary-description">
            Address:- Keshav Nagar, Mukti Ashram Gurudwara Road, Ibrahim Pur
            Delhi - 110036
          </p>
        </div>
      </div>
      <div className="all-right-reservered">
        <p>
          Suresh Thapa &copy; <span className="footer-date"> 2021 </span>
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
