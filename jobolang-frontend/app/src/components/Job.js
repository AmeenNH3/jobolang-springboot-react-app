import React from "react";

import { FaLocationArrow, FaCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarDateFill } from "react-icons/bs";
import styled from "styled-components";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteJob } from "../features/AllJobs/allJobsSlice";
import { Link } from "react-router-dom";
import { setEditJob } from "../features/Job/JobSlice";

const gradients = [
  `linear-gradient(180deg, #95d0d5 0%, #50acd3 100%)`,
  `linear-gradient(180deg, #95a0d5 0%, #9850d3 100%)`,
  `linear-gradient(180deg, #d595b4 0%, #d350a9 100%)`,
  `linear-gradient(180deg, #d5959e 0%, #d35050 100%)`,
  `linear-gradient(132deg, #F4D03F 0%, #16A085 100%);`,
  `linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);`,
  `linear-gradient(90deg,  #74EBD5 0%, #9FACE6 100%);`,
  `linear-gradient(19deg,  #FAACA8 0%, #DDD6F3 100%);`,
  `linear-gradient(90deg,  #FAD961 0%, #F76B1C 100%);`,
  `linear-gradient(90deg,  #FEE140 0%, #FA709A 100%);`,
  `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);`,
  `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);`,
  `linear-gradient(0deg,   #D9AFD9 0%, #97D9E1 100%);`,
  `linear-gradient(0deg,   #D9AFD9 0%, #97D9E1 100%);`,
  `linear-gradient(62deg,  #FBAB7E 0%, #F7CE68 100%);`,
  `linear-gradient(45deg,  #85FFBD 0%, #FFFB7D 100%);`,
  `linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);`,
  `linear-gradient(43deg,  #4158D0 0%, #C850C0 100%);`,
  `linear-gradient(225deg, #FF3CAC 0%, #784BA0 100%);`,
  `linear-gradient(180deg,#d35050  0%,#95d0d5  100%)`,
  `linear-gradient(180deg,#d38f50  0%,#95a0d5  100%)`,
  `linear-gradient(180deg,#c8d350  0%,#d595b4  100%)`,
  `linear-gradient(180deg,#96d350  0%,#d5959e  100%)`,
  `linear-gradient(132deg,#16A085  0%,#F4D03F  100%);`,
  `linear-gradient(180deg,#bbffd6  0%,#A9C9FF  100%);`,
  `linear-gradient(90deg, #9fe6e5  0%,#74EBD5  100%);`,
  `linear-gradient(19deg, #d6e2f3  0%,#FAACA8  100%);`,
  `linear-gradient(90deg, #1c1cf7  0%,#FAD961  100%);`,
  `linear-gradient(90deg, #FA709A  0%,#FEE140  100%);`,
  `linear-gradient(160deg,#a180d0  0%,#0093E9  100%);`,
  `linear-gradient(160deg,#cd80d0  0%,#0093E9  100%);`,
  `linear-gradient(0deg,  #e197e0  0%,#D9AFD9  100%);`,
  `linear-gradient(0deg,  #97D9E1  0%,#D9AFD9  100%);`,
  `linear-gradient(62deg, #f768b4  0%,#FBAB7E  100%);`,
  `linear-gradient(45deg, #FFFB7D  0%,#85FFBD  100%);`,
  `linear-gradient(135deg,#9599E2  0%,#8BC6EC  100%);`,
  `linear-gradient(43deg, #C850C0  0%,#4158D0  100%);`,
  `linear-gradient(225deg,#784BA0  0%,#FF3CAC  100%);`,
];
const statusColor = {
  pending: `yellow`,
  declined: `red`,
  interview: `lightgreen`,
};
function Job({ company, position, status, jobType, jobLocation, createdAt, createdBy, id }) {
  const gradientColor = gradients[Math.floor(Math.random() * 36)];
  const dispatch = useDispatch();

  return (
    <Wrapper className="job-item" gradColor={gradientColor} statColor={statusColor[status]}>
      <div className="job-item-header-container">
        <div className="job-profile-picture">C</div>
        <div className="job-header-text">
          <h4 className="job-title">{position}</h4>
          <p className="job-subtitle">{company}</p>
        </div>
      </div>
      <div className="job-item-info-container">
        <div className="job-location">
          <FaLocationArrow className="job-item-icon"></FaLocationArrow>
          <span className="job-item-info-text">{jobLocation} </span>
        </div>
        <div className="job-createdAt">
          <BsFillCalendarDateFill className="job-item-icon"></BsFillCalendarDateFill>
          <span className="job-item-info-text">{moment(createdAt).format("MMM Do,YYYY")}</span>
        </div>
        <div className="job-type">
          <GoLocation className="job-item-icon"></GoLocation>
          <span className="job-item-info-text">{jobType} </span>
        </div>
        <div className="job-location">
          <FaCircle className="job-item-icon job-status-color"></FaCircle>
          <span className="job-item-info-text">{status} </span>
        </div>
      </div>

      <div className="job-item-button-container">
        <Link
          to="../add-job"
          className="job-item-edit-btn"
          onClick={() =>
            dispatch(
              setEditJob({
                editJobId: id,
                position,
                company,
                jobLocation,
                jobType,
                status,
              })
            )
          }
        >
          Edit
        </Link>
        <button className="job-item-delete-btn" onClick={() => dispatch(deleteJob(id))}>
          Delete
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: 0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px 2px 4px -3px rgba(25, 37, 50, 0.1),
    0px 3px 2px -2px rgba(25, 37, 50, 0.1);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .job-item-header-container {
    /* background: red; */
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .job-profile-picture {
    width: 50px;
    height: 50px;
    background-color: aliceblue;
    background: ${(props) =>
      props.gradColor || `linear-gradient(180deg, #95d0d5 0%, #50acd3 100%)`};
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
  }
  .job-title {
    font-size: 1rem;
    font-weight: 700;
    color: #333333;
  }
  .job-subtitle {
    font-size: 0.825rem;
    color: #acacac;
  }
  .job-item-info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.6rem;
    color: #444;
    font-size: 0.825rem;
    div {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 8px;
    }
  }
  .job-item-button-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .job-item-edit-btn {
    display: block;
    text-decoration: none;
    padding: 5px 16px;
    color: #314b32;
    font-size: 0.825rem;
    background: linear-gradient(
      110.82deg,
      rgba(200, 255, 191, 0.6) 36.23%,
      rgba(147, 255, 129, 0.6) 103.89%
    );
    border: none;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.3s;
  }
  .job-item-edit-btn:hover {
    background: linear-gradient(
      110.82deg,
      rgba(0, 235, 12, 1) 36.23%,
      rgba(148, 255, 129, 0.94) 103.89%
    );
  }
  .job-item-delete-btn {
    padding: 8px 16px;
    color: #573333;
    border: none;
    background: linear-gradient(
      110.14deg,
      rgba(255, 135, 135, 0.6) 36.59%,
      rgba(255, 119, 119, 0.6) 113.59%
    );
    font-size: 0.825rem;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.3s;
  }
  .job-item-delete-btn:hover {
    background: linear-gradient(110.14deg, rgba(255, 0, 0, 1) 36.59%, rgba(215, 5, 5, 0.6) 113.59%);
  }
  .job-status-color {
    color: ${(props) => props.statColor};
  }
`;
export default Job;
