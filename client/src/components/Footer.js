import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col s4 m4 l4 footer-content">
            <Link to="/contact">CONTACT US</Link>
          </div>
          <div className="col s4 m4 l4 footer-content">
            <a href="/about">ABOUT</a>
          </div>
          <div className="col s4 m4 l4 footer-content">
            <a href="/">COMING SOON</a>
          </div>
          <div className="footer-copyright col s12 m12 l12">
            © 2020 By Fineprint. Made by Chad,All Ts and Cs apply
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
