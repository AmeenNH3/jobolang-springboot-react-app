import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 968px;
  box-shadow: 0px 12px 8px -1px rgba(0, 0, 0, 0.25);
  background-color: #1b1b1e;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 2rem 0;
  .demo-btn {
    margin-top: 1rem;
    background: none !important;
    border: 2px solid #1b1b1e !important;
    color: #1b1b1e !important;
  }
  .left-container {
    background-color: #69a2b0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0rem 0rem 4rem 4rem;
    .login-title {
      font-size: 3.2rem;
      color: #1b1b1e;
      margin-top: 1rem;
    }
    .login-subtitle {
      font-size: 1.8rem;
      color: #1b1b1e;
      margin-bottom: 4rem;
    }
    .logo {
      padding-top: 4rem;
      margin-bottom: 1rem;
    }

    .form-control {
      background-color: #fff;
      margin-bottom: 2rem;
      width: 74%;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border-radius: 4px;
      padding: 0.8rem 0.8rem;
      transition: all 0.3s;
    }

    .login-input {
      background: none;
      width: 100%;
      height: 100%;
      border: none;
      transition: all 0.3s;
    }
    .login-input[type="text"] {
      caret-color: #96031a;
    }
    .login-input::placeholder {
      font-family: "Nunito", sans-serif;
    }
    .login-input:focus {
      outline: none;
      letter-spacing: 1.2px;
    }
    .form-input-container {
      margin-bottom: 4.2rem;
    }
    .login-btn {
      background: none;
      border: none;
      background-color: #1b1b1e;
      color: #fff;
      width: 74%;
      padding: 0.8rem;
      border-radius: 8px;
      font-weight: 700;
      transition: all 0.3s;
      cursor: pointer;
    }
    .login-btn:hover {
      background-color: #2e2e2e;
    }
    .register-user {
      margin-top: 0.5rem;
      font-size: 0.825rem;

      strong {
        cursor: pointer;
        transition: all 0.3s;
      }
      strong:hover {
        color: #fff;
      }
    }
  }
  .right-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .art-image-container {
      /* background-color: #fff; */
    }
    .art-img {
      width: 100%;
      transform: translate(0, -10%);
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    background-color: #1b1b1e;
    grid-template-columns: 1fr;
    justify-content: center;

    margin: 0;
    .right-container {
      display: none;
    }
    .left-container {
      height: 100vh;
    }
  }
`;

export default Wrapper;
