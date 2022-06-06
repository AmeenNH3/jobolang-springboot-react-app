import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllJobs } from "../features/AllJobs/allJobsSlice";
import Job from "./Job";
import loadingGif from "../assets/images/loader.gif";
function JobsContainer() {
  const dispatch = useDispatch();
  const { jobs, isLoading } = useSelector((state) => state.allJobs);

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <h1 className="no-jobs-text">Loading...please wait</h1>
        <img src={loadingGif} alt="" />
      </Wrapper>
    );
  }
  if (jobs.length <= 0) {
    return (
      <Wrapper>
        <h1 className="no-jobs-text">No jobs found</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3 className="jobs-container-title">{jobs.length} Jobs found</h3>
      <div className="jobs-container-content">
        {jobs.map((item) => {
          return <Job key={item.id} {...item}></Job>;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-left: 2rem;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  .jobs-container-title {
    font-weight: 700;
  }
  .jobs-container-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 1rem;
    padding: 2rem;
  }
  .no-jobs-text {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: grey;
  }

  @media (max-width: 1348px) {
    .jobs-container-content {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 668px) {
    .jobs-container-content {
      grid-template-columns: 1fr;
    }
  }
`;
export default JobsContainer;
