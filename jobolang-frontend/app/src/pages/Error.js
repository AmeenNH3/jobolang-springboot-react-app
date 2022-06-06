import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import errorImg from "../assets/images/error.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Wrapper>
      <div className="error-image-container">
        <img className="error-img" src={errorImg} alt="404" />
      </div>
      <div className="error-text-content">
        <h1 className="error-title">OOPS PAGE NOT FOUND!</h1>
        <p className="error-text">Something went wrong, please try again.</p>
      </div>
      <div className="error-btn-container">
        <Link className="back-home-btn" to="./">
          Go back to home
        </Link>
      </div>
    </Wrapper>
  );
}

export default Error;
