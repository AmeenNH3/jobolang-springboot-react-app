import styled from "styled-components";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #69a2b0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
  text-align: center;
  .error-title {
    color: #1b1b1e;
  }
  .error-text {
    color: #f6f6f6;
    margin-bottom: 3rem;
  }
  .back-home-btn {
    text-decoration: none;
    color: #fbfffe;
    background-color: #96031a;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.3s;
  }
  .back-home-btn:hover {
    background-color: #1b1b1e;
  }
  @media (max-width: 646px) {
    .error-img {
      width: 60%;
    }
    .error-title {
      font-size: 2.4rem;
    }
  }
`;

export default Wrapper;
