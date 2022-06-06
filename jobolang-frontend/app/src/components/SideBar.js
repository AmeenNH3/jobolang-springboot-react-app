import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/SideBar";
import logo from "../assets/images/logo2.svg";
import { BsFillBarChartFill, BsFillBriefcaseFill, BsPlusSquare } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { BiSupport, BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, logoutUser, toggleSideBar } from "../features/user/userSlice";
import { toast } from "react-toastify";

function SideBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const isOpen = useSelector((state) => state.user.isOpen);

  function handleLogout() {
    dispatch(clearStore());
    dispatch(logoutUser());
    toast.success("logged out successfully!");
    navigate("register");
  }

  function handleLinkClick() {
    if (isOpen) {
      dispatch(toggleSideBar());
    }
    console.log("link clicked");
  }

  return (
    <Wrapper className={props.className}>
      <div className="sidebar-logo-container">
        <img className="sidebar-logo" src={logo} alt="sidebar logo" />
      </div>
      <div className="user-container">
        <div className="profile-picture">
          <span className="profile-letter">{user.username.charAt(0)}</span>
        </div>
        <p className="profile-name">{user.username}</p>
        <div className="profile-line"></div>
      </div>
      <div className="menu-container">
        <h4 className="menu-title">Menu</h4>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <NavLink className="sidebar-link" to="" onClick={handleLinkClick}>
              <BsFillBarChartFill className="sidebar-menu-icon"></BsFillBarChartFill>
              <span>Analytics</span>
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <NavLink className="sidebar-link" to="all-jobs" onClick={handleLinkClick}>
              <BsFillBriefcaseFill className="sidebar-menu-icon"></BsFillBriefcaseFill>
              <span>All Jobs</span>
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <NavLink className="sidebar-link" to="add-job" onClick={handleLinkClick}>
              <BsPlusSquare className="sidebar-menu-icon"></BsPlusSquare>
              <span>Add Job</span>
            </NavLink>
          </li>
          <li className="sidebar-list-item">
            <NavLink className="sidebar-link" to="profile" onClick={handleLinkClick}>
              <ImProfile className="sidebar-menu-icon"></ImProfile>
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar-other-container">
        <div className="other-links">
          <a className="other-link" href="support">
            <BiSupport className="sidebar-menu-icon"></BiSupport>
            <span>Support</span>
          </a>
          <a className="other-link" href="help">
            <BiHelpCircle className="sidebar-menu-icon"></BiHelpCircle>
            <span>Help</span>
          </a>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <span>Logout</span>
          <MdLogout></MdLogout>
        </button>
      </div>
    </Wrapper>
  );
}

export default SideBar;
