import React, { Component } from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoWindows } from "react-icons/io";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="fContainer">
            <div className="col span-1-of-2">
              <ul className="footer-nav">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col span-1-of-2">
              <ul className="social-links">
                <li>
                  <a href="#">
                    <IoLogoFacebook className="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoLinkedin className="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <IoLogoWindows className="windows" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p>
              Copyright &copy; {new Date().getFullYear()} by Hamutal Greenberg
              <br />
              All Rights Reserved.
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
