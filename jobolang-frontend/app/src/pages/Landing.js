import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import heroImg from "../assets/images/hero.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";

function Landing() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Wrapper>
      <nav className={isOpen ? "nav open" : "nav"}>
        <img className="logo" src={logo} alt="logo" />
        <ul className="nav-links">
          <li className="nav-link-item">
            <a className="nav-link" href="./">
              Home
            </a>
          </li>
          <li className="nav-link-item">
            <a className="nav-link" href="./">
              How it works
            </a>
          </li>
          <li className="nav-link-item">
            <a className="nav-link" href="./">
              Contact us
            </a>
          </li>
          <Link to="/register" className="btn lgr-btn">
            Login/Register
          </Link>
        </ul>
        <button className="toggle-btn">
          {isOpen ? (
            <AiFillCloseSquare
              className="toggle-icon"
              onClick={() => setisOpen(false)}
            ></AiFillCloseSquare>
          ) : (
            <GiHamburgerMenu
              className="toggle-icon"
              onClick={() => setisOpen(true)}
            ></GiHamburgerMenu>
          )}
        </button>
      </nav>
      <div className="container landing-page">
        <div className="hero-container">
          <div className="hero-text-content">
            <h1>The smarter way of organizing and tracking your job applications.</h1>
            <p>
              Jobolang will help you keep track of all your job application and help you in finding
              better carrer hasle free and quick
            </p>
            <Link to="/register" className="hero-cta-btn">
              Try it now
            </Link>
          </div>
          <div className="hero-img-container">
            <img className="hero-img" src={heroImg} alt="a happy women" />
          </div>
        </div>
      </div>
      <div className="dummy-divs shadow-top"></div>
      <div className="dummy-divs shadow-left"></div>
      <div className="dummy-divs ellipse-right"></div>
      {/* <div className="hero-img-container">
        <img className="hero-img" src={heroImg} alt="a happy women" />
      </div> */}
    </Wrapper>
  );
}

export default Landing;
