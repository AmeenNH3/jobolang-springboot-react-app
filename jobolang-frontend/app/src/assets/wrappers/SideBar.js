import styled from "styled-components";

const Wrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  font-family: "Nunito", sans-serif;
  background: #fafafa;
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  z-index: 100;
  height: 90vh;
  .sidebar-logo-container {
    align-self: flex-start;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
  }
  .user-container {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
  .profile-picture {
    width: 57px;
    height: 57px;
    border-radius: 100%;
    background: linear-gradient(180deg, #b43737 0%, #a42222 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile-letter {
    font-size: 1.6rem;
    color: #fff;
    text-transform: uppercase;
  }
  .profile-name {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
  }
  .profile-line {
    width: 100px;
    height: 1px;
    background-color: #e2e2e2;
  }
  .menu-container {
    /* background-color: #a42222; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
  }

  .menu-title {
    align-self: flex-start;
    padding-left: 2rem;
    padding-bottom: 1rem;
    color: #6b6b6b;
  }

  .sidebar-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .sidebar-link {
    text-decoration: none;
    font-size: 14px;
    color: #8d8d8d;
    border-radius: 4px;
    padding: 9px 18px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s;
  }

  .sidebar-link:hover {
    color: #3d3d3d;
  }

  .sidebar-menu-icon {
    color: #3d3d3d;
  }
  .sidebar-other-container {
    /* background-color: #3d3d3d; */
    /* width: 100%; */
    border-top: 1px solid #e2e2e2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    /* padding-left: 2rem; */
  }
  .other-links {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .other-link {
    color: #8d8d8d;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 6px;
    transition: all 0.3s;
  }
  .other-link:hover {
    color: #3d3d3d;
  }
  .logout-btn {
    background: none;
    border: none;
    border: 1px solid #929292;
    border-radius: 8px;
    color: #929292;
    padding: 14px 28px;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s;
    cursor: pointer;
  }
  .logout-btn:hover {
    border-color: #3d3d3d;
    color: #3d3d3d;
  }
  @media (max-width: 968px) {
    min-height: 100vh;
    padding: 5rem;
  }
`;

export default Wrapper;
