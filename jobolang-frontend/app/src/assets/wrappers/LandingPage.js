import styled from "styled-components";
const Wrapper = styled.main`
  background-color: var(--bg-00);
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  .logo {
    z-index: 100;
  }
  .nav {
    max-width: 1368px;
    padding: 4rem 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3.375rem;
  }
  .nav-link-item {
  }
  .nav-link {
    text-decoration: none;
    color: var(--main-white-00);
    font-weight: 200;
    position: relative;
    transition: all 0.3s;
    z-index: 10;
  }
  .nav-link:hover {
    color: #f6f6f6;
  }
  .nav-link:hover::after {
    transition: all 0.3s;
    content: "";
    position: absolute;
    left: 0;
    bottom: -30%;
    width: 1.2rem;
    height: 3px;
    border-radius: 100px;
    background-color: #1b1b1e;
  }
  .lgr-btn {
    font-weight: 600;
    background: none;
    border: none;
    border: 2px solid #1b1b1e;
    padding: 0.725rem 1.325rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 10;
    color: #1b1b1e;
    text-decoration: none;
  }
  .lgr-btn:hover {
    color: #f6f6f6;
    border: 2px solid #f6f6f6;
  }

  .hero-container {
    display: grid;
    grid-template-columns: 1fr 40rem;
    /* background-color: #96031a; */
    width: 100%;
    height: 100%;
  }
  .hero-text-content {
    margin-top: 9rem;
    z-index: 10;
    h1 {
      width: 80%;
      margin-bottom: 1.2rem;
    }
    p {
      color: #f6f6f6;
      font-weight: 200;
      width: 30rem;
      margin-bottom: 2.8rem;
    }
    .hero-cta-btn {
      border: none;
      background: none;
      background-color: #96031a;
      color: #fbfffe;
      padding: 1rem 2.4rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 6px;
      transition: all 0.3s;
      cursor: pointer;
      text-decoration: none;
      box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.25);
    }
    .hero-cta-btn:hover {
      background-color: #1b1b1e;
    }
  }

  .dummy-divs {
    position: absolute;
    width: 50px;
    height: 50px;
  }

  .ellipse-right {
    top: -20%;
    right: -10%;
    width: 600px;
    height: 500px;
    border-radius: 100%;
    background: #87d0e2;
    filter: blur(150px);
    z-index: 3;
  }
  .hero-img-container {
    position: relative;
    width: 100%;
    z-index: 7;
  }
  .hero-img {
    position: absolute;
    width: 120%;
    transform: translate(-10%, -30%);
  }

  .toggle-btn {
    display: none;
    background: none;
    border: none;
    font-size: 2.4rem;
    color: #96031a;
    z-index: 1000;
    cursor: pointer;
  }

  @media (max-width: 1468px) {
    .nav {
      max-width: 1170px;
    }

    .hero-text-content {
      h1 {
        width: 100%;
      }
    }
  }
  @media (max-width: 1268px) {
    .nav {
      max-width: 970px;
    }
    .container {
      max-width: 970px;
    }
  }
  @media (max-width: 998px) {
    .nav {
      width: 95%;
    }
    .container {
      max-width: 970px;
    }
  }
  @media (max-width: 845px) {
    .hero-container {
      grid-template-columns: 1fr;
    }
    .nav-links {
      display: none;
      position: absolute;
      background-color: #fff;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 999;
      /* display: flex; */
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .nav-link {
      color: #000;
    }

    .open .nav-links {
      display: flex;
    }
    .toggle-btn {
      display: block;
    }
    .hero-img-container {
      display: none;
    }
    .hero-text-content {
      margin-top: 2rem;
      h1 {
        font-size: 3rem;
      }
    }
    .logo {
      width: 120px;
    }
  }
  @media (max-width: 545px) {
    .hero-text-content {
      margin-top: 2rem;
      h1 {
        font-size: 2.4rem;
        width: 100%;
      }
      p {
        width: 100%;
      }
    }
  }
`;

export default Wrapper;
