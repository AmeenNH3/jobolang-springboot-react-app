import styled from "styled-components";
import bg from "../images/bg-login.jpg";
const Wrapper = styled.main`
  min-height: 100vh;
  max-width: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(135, 135, 135, 0.491),
      rgba(135, 135, 135, 0.495)
    ),
    url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  .dashboard-center {
    background-color: blue;
    width: 84%;
    height: 90vh;
    display: grid;
    grid-template-columns: 240px 1fr;
    background: #ffffff;
    box-shadow: 2px 11px 15px -4px rgba(0, 0, 0, 0.29);
  }
  .sidebar-toggle-icon {
    background: none;
    border: none;
    font-size: 1.5rem;
    display: none;
    background: linear-gradient(180deg, #b43737 0%, #a42222 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 968px) {
    .dashboard-center {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      height: 100vh;
    }
    .sidebar-toggle-icon {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
    }
  }
`;

export default Wrapper;
