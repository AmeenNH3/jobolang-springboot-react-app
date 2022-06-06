import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function StatsContainer() {
  const { stats, monthlyApplications } = useSelector((state) => state.allJobs);
  return (
    <Wrapper>
      <div className="stats-container">
        <div className="stat-container stat-container-1">
          <p className="stat-text">Pending Applications</p>
          <p className="stat-number">{stats.pending}</p>
        </div>
        <div className="stat-container stat-container-2">
          <p className="stat-text">Interviewed Applications</p>
          <p className="stat-number">{stats.interview}</p>
        </div>
        <div className="stat-container stat-container-3">
          <p className="stat-text">Declined Applications</p>
          <p className="stat-number">{stats.declined}</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem 1rem 0rem 2rem;
  width: 100%;
  .stat-container {
    padding: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .stat-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    padding-right: 1rem;
    border-right: 2px solid #666;
  }
  .stat-number {
    font-size: 2.4rem;
    color: #fff;
    font-weight: 700;
  }
  .stats-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    width: 100%;
  }

  .stat-container-1 {
    background: linear-gradient(103.13deg, #50acd3 0%, #71357c 122.17%);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }
  .stat-container-2 {
    background: linear-gradient(103.13deg, #72d350 0%, #35457c 122.17%);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }
  .stat-container-3 {
    background: linear-gradient(103.13deg, #d35050 0%, #71357c 122.17%);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }

  @media (max-width: 1695px) {
    .stat-text {
      font-size: 1rem;
    }
    .stat-number {
      font-size: 2rem;
    }
  }
  @media (max-width: 1368px) {
    .stats-container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
    .stat-container {
      padding: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .stat-container-3 {
      grid-area: 2 / 1 / 2 / -1;
      justify-self: center;
    }
  }
  @media (max-width: 568px) {
    .stat-container {
      padding: 1rem;
    }
    .stats-container {
      grid-template-columns: 1fr;
      justify-content: center;
      justify-items: center;
    }
  }
`;

export default StatsContainer;
