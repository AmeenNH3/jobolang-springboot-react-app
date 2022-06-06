import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import abstractImg from "../../assets/images/abstract-1.svg";
import { clearValues, handleChange, updateUser } from "../../features/user/userSlice";

function Profile() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);

  // const [values, setValues] = useState({
  //   username: user?.username || "",
  //   fullName: user?.fullName || "",
  //   email: user?.email || "",
  //   location: user?.location || "",
  // });

  const { username, email, fullName, location } = useSelector((state) => state.user.user);

  function handleChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(
      handleChange({
        name,
        value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    // const { username, fullName, email, location } = values;
    if (!username || !fullName || !email || !location) {
      toast.error("please fill all the values");
      return;
    }
    dispatch(updateUser({ username, fullName, email, location }));
  }

  return (
    <Wrapper>
      <div className="profile-page-container">
        <h2 className="profile-title">Profile</h2>
        <div className="profile-content-container">
          <div className="profile-header-container">
            <div className="profile-picture-big">
              <span className="profile-letter-big">{username ? username.charAt(0) : "A"}</span>
            </div>
            <div className="profile-text-content">
              <p className="profile-name">{username}</p>
              <p className="profile-text">Update your profile information</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-row-1">
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={handleChangeForm}
                  value={username}
                  className="form-input"
                  name="username"
                  type="text"
                  placeholder="name"
                  disabled
                />
              </div>
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="lastName">
                  Full Name
                </label>
                <input
                  onChange={handleChangeForm}
                  value={fullName}
                  className="form-input"
                  name="fullName"
                  type="text"
                  placeholder="full name"
                />
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={handleChangeForm}
                  value={email}
                  className="form-input"
                  name="email"
                  type="email"
                  placeholder="email address"
                />
              </div>
            </div>
            <div className="form-row-3">
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="location">
                  Location
                </label>
                <input
                  onChange={handleChangeForm}
                  value={location}
                  className="form-input"
                  name="location"
                  type="text"
                  placeholder="country"
                />
              </div>
            </div>

            <div className="form-button-container">
              <button type="submit" className="form-btn form-btn-save">
                save
              </button>
              <button
                type="button"
                className="form-btn form-btn-cancel"
                onClick={() => dispatch(clearValues())}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="abstract-1">
        <img className="abstract-img" src={abstractImg} alt="abstract" />
      </div>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  padding-top: 3rem;
  padding-left: 2rem;
  z-index: 5;
  .profile-page-container {
    /* background-color: grey; */
    /* background-color: #88c0c5; */
  }
  .profile-content-container {
    /* background-color: #8e8e8e; */
    margin-left: 5rem;
    /* width: fit-content; */
  }
  .profile-title {
    color: #000;
    font-size: 2rem;
    font-weight: 700;
  }

  .profile-header-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    /* padding-left: 4rem; */
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .profile-picture-big {
    width: 77px;
    height: 77px;
    border: 4px solid rgba(149, 208, 213, 0.5);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 100%;
    background-color: #88c0c5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-name {
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  .profile-letter-big {
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
  }
  .profile-text {
    color: #8e8e8e;
  }

  .profile-form {
    /* background-color: grey; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 6rem;
  }
  .form-row-1 {
    display: flex;
    gap: 1rem;
    input {
      width: 16.75rem;
    }
    /* background-color: grey; */
    /* width: fit-content; */
    width: 50%;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(202, 202, 202, 0.29);
  }
  .form-row-2 {
    input {
      width: 20rem;
    }
    width: 50%;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(202, 202, 202, 0.29);
  }
  .form-row-3 {
    width: 50%;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(202, 202, 202, 0.29);
  }
  .form-input-element {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    color: #525252;

    input::placeholder {
      font-family: Calibri, "Trebuchet MS", sans-serif;
      padding-left: 6px;
      font-size: 12px;
      color: #bcbcbc;
      text-transform: capitalize;
    }
  }
  .form-input {
    background-color: none;
    border: none;
    box-shadow: 0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px 3px 2px -2px rgba(25, 37, 50, 0.1);
    border-radius: 6px;
    padding: 8px;
  }
  .form-input:focus {
    outline: 1px solid #88c0c5;
  }

  .form-button-container {
    padding-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  .form-btn {
    display: block;
    background: none;
    border: none;
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.3s;
  }
  .form-btn-save {
    background-color: #3d3d3d;
    border-radius: 6px;
    padding: 8px 2.4rem;
    color: #fff;
  }
  .form-btn-cancel {
    border-radius: 6px;
    padding: 8px 2.4rem;
    color: #3d3d3d;
    border: 1px solid #3d3d3d;
  }
  .form-btn-save:hover {
    background-color: #555555;
  }
  .form-btn-cancel:hover {
    color: #d3d3d3;
    border: 1px solid #c0c0c0;
  }
  .abstract-1 {
    width: 100%;
    bottom: -2%;
    position: absolute;
    z-index: -1;
  }
  .abstract-img {
    width: 100%;
    opacity: 80%;
    z-index: -1;
  }

  @media (max-width: 1124px) {
    .form-row-1 {
      flex-direction: column;
    }
  }
  @media (max-width: 546px) {
    .profile-content-container {
      margin-left: 1rem;
    }
    .profile-form {
      padding-left: 1rem;
    }
    .abstract-1 {
      display: none;
    }
  }
`;
