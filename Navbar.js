import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Button.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo mx-4 justify-content-between text-align-center"
            onClick={closeMobileMenu}
          >
            BAT-EX
            <img
              style={{ width: "80px", height: "40px", paddingLeft: "15px" }}
              src="LOGO.png"
              alt="avatar"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/prebook"
                className="nav-links ac"
                onClick={closeMobileMenu}
                style={{ color: "	#aaff77" }}
              >
                Find a Charging Point
                <i class="fa fa-location-arrow" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/service"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            <li className="text-light">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
            {button && <Button className="asd" buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
