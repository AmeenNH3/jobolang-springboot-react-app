import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import SideBar from "../../components/SideBar";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../features/user/userSlice";

function SharedLayout() {
  const dispatch = useDispatch();
  const sideBarOpen = useSelector((state) => state.user.isOpen);

  function toggle() {
    dispatch(toggleSideBar());
  }

  const className = sideBarOpen ? "sidebar show" : "sidebar";

  return (
    <Wrapper>
      <div className="dashboard-center">
        <button className="sidebar-toggle-icon" onClick={toggle}>
          {sideBarOpen ? (
            <AiOutlineCaretUp></AiOutlineCaretUp>
          ) : (
            <AiOutlineCaretDown></AiOutlineCaretDown>
          )}
        </button>
        <SideBar className={className}></SideBar>
        <Outlet></Outlet>
      </div>
    </Wrapper>
  );
}

export default SharedLayout;
