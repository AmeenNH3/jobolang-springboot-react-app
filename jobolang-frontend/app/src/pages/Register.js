import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import Logo from "../assets/images/logo.svg";
import ArtImg from "../assets/images/art.svg";
import { toast } from "react-toastify";
import { FiBriefcase, FiLock, FiMail } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  email: "",
  isMember: true,
};
function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key == " ") {
      e.preventDefault();
      toast.error("spaces are not allowed");
    }
  };

  const handleChange = (e) => {
    let changedInput = e.target.name;
    setValues({ ...values, [changedInput]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, isMember } = values;
    if (!username || !password || (!isMember && !email)) {
      toast.error("Please fill all the values!");
      return;
    }

    if (!isMember && username.length < 4) {
      toast.error("username should be larger than 4 characters");
      return;
    }
    if (!isMember && password.length < 6) {
      toast.error("password should be larger than 6 characters");
      return;
    }

    if (isMember) {
      dispatch(loginUser({ username, password }));
      return;
    }
    if (!isMember) {
      dispatch(registerUser({ email, username, password })).then((value) => {
        if (value.meta.requestStatus == "fulfilled") {
          setValues({ ...values, isMember: true });
        }
      });

      return;
    }
  };

  const toggleMember = () => {
    setValues((prevState) => {
      return { ...prevState, isMember: !prevState.isMember };
    });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <div className=" login-div-container ">
      <Wrapper>
        <div className="left-container">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          {values.isMember ? (
            <h1 className="login-title">Login into</h1>
          ) : (
            <h1 className="login-title">Sign up</h1>
          )}
          <h3 className="login-subtitle">Your account</h3>
          <form onSubmit={onSubmit}>
            <div className="form-input-container">
              {!values.isMember && (
                <div className="form-control">
                  <FiMail></FiMail>
                  <input
                    className="login-input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
              )}
              {
                <div className="form-control">
                  <FiBriefcase></FiBriefcase>
                  <input
                    className="login-input"
                    type="text"
                    placeholder="username"
                    name="username"
                    onKeyDown={handleKeyDown}
                    value={values.username}
                    onChange={handleChange}
                  />
                </div>
              }
              <div className="form-control">
                <FiLock></FiLock>
                <input
                  className="login-input"
                  type="password"
                  placeholder="password"
                  name="password"
                  onKeyDown={handleKeyDown}
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="login-btn-container">
              {values.isMember ? (
                <button disabled={isLoading} type="submit" className="login-btn">
                  Login
                </button>
              ) : (
                <button disabled={isLoading} type="submit" className="login-btn">
                  Sign up
                </button>
              )}
              <button
                disabled={isLoading}
                type="button"
                className="login-btn demo-btn"
                onClick={() => {
                  dispatch(loginUser({ username: "test", password: "test123" }));
                }}
              >
                Demo
              </button>
              {values.isMember ? (
                <p className="register-user">
                  Don't have an account? Signup
                  <strong onClick={toggleMember}> Here</strong>
                </p>
              ) : (
                <p className="register-user">
                  Already have an account? Login
                  <strong onClick={toggleMember}> Here</strong>
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="right-container">
          <div className="art-image-container">
            <img className="art-img" src={ArtImg} alt="art image" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
export default Register;
