import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ChartsContainer from "../../components/ChartsContainer";
import StatsContainer from "../../components/StatsContainer";
import { getStats } from "../../features/AllJobs/allJobsSlice";

function Analytics() {
  const dispatch = useDispatch();
  const { stats } = useSelector((state) => state.allJobs);
  const { username } = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getStats());
  }, []);

  return (
    <Wrapper>
      <h2 className="stats-title">Welcome {username == "test" ? "" : username}</h2>
      <StatsContainer></StatsContainer>
      <div className="chart-overview-container">
        <div className="overview-container">
          <h3 className="overview-title">Quick Overview</h3>
          <p className="overview-text">
            you’ve applied for {stats.pending + stats.declined + stats.interview} jobs and{" "}
            {stats.interview} of them have interviews scheduled, {stats.pending} pending
            applications and {stats.declined} declined applications
          </p>
          <button className="btn-insights">Get more insights</button>
        </div>
        <ChartsContainer></ChartsContainer>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-y: scroll;
  padding-top: 2rem;
  padding-left: 2rem;
  .chart-overview-container {
    padding-top: 2rem;
    padding-left: 2rem;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2rem;
    padding-left: 2rem;
  }
  .overview-container {
    padding: 1.05rem;
    background: #f9f9f9;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.45);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  .overview-title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .overview-text {
    color: #848484;
    font-size: 1rem;
  }
  .btn-insights {
    margin-top: 1rem;
    border: none;
    background: none;
    background-color: #a42222;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.825rem 1.225rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .btn-insights:hover {
    background-color: #a42222;
  }
  .stats-title {
    font-weight: 700;
  }
  @media (max-width: 1500px) {
    .chart-overview-container {
      grid-template-columns: 1fr;
      padding-right: 1rem;
    }
    .overview-container {
      align-self: center;
      justify-self: center;
    }
    .btn-insights {
      align-self: center;
    }
  }
  @media (max-width: 968px) {
    padding-top: 3rem;
    padding-left: 0;
  }
`;

export default Analytics;
