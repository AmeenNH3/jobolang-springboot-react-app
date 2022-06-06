import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

function BarChartComponent({ data, barSizeValue, aspectValue }) {
  return (
    <Wrapper>
      <ResponsiveContainer
        aspect={aspectValue}
        width="99%"
        height="99%"
        className="bar-chart-container"
      >
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar barSize={barSizeValue || 30} dataKey="count" fill="#870606" />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  max-height: 500px;
`;
export default BarChartComponent;
