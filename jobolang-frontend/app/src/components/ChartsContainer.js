import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BarChart from "./BarChart";
import useWindowDimensions from "./CustomHooks/useWindowDimensions";
function ChartsContainer() {
  const { monthlyApplications } = useSelector((state) => state.allJobs);
  const { height, width } = useWindowDimensions();
  const barSizeValue = width < 600 ? 20 : 40;
  const aspectValue = width < 600 ? 1.5 : 3;
  console.log(width);
  return (
    <Wrapper>
      <h3>Monthly Applications</h3>
      <BarChart
        data={monthlyApplications}
        barSizeValue={barSizeValue}
        aspectValue={aspectValue}
      ></BarChart>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #f9f9f9;
  box-shadow: 0px 3px 19px -7px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.45);
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  padding: 1rem;
`;
export default ChartsContainer;
