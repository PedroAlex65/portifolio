import styled from "styled-components";

export const Home_H = styled.div`
  background-color: #2d2e32;
`;

export const ContainerHome = styled.div`
  max-width: 1440px;
  height: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    max-width: 1110px;
    margin: 0 auto;
  }

  @media (max-width:884px)  {
    max-width: 700px;
    align-items: center;
    justify-content: center;

    .image-logo {
      position: absolute;
      opacity: 0.2;
    }
  }

  @media (max-width: 428px) {
    max-width: 380px;
    margin: -50px auto;
    align-items: center;
    justify-content: center;

    .image-logo {
      width: 100%;
      position: absolute;
      opacity: 1;
    }
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    line-height: 36px;
    span {
      color: #ff0000;
    }

    &::after {
      content: " }";
      color: #ff0000;
    }
    &::before {
      content: "{ ";
      color: #ff0000;
    }
  }
  h1 {
    margin-top: 32px;
    font-size: 50px;
    font-weight: 900;
    line-height: 58px;
    color: #1cac80;
  }
  p {
    margin-top: 32px;
    font-size: 20px;
    line-height: 23px;
    font-weight: 500;
    color: #fff;
    max-width: 597px;
  }

  img {
    position: relative;
    left: 135px;
    width: 64px;
    height: 64px;
  }

  a {
    color: #fff;
    font-size: 20px;
    line-height: 23px;
    color: #d16a6a;
    font-weight: 400;
    text-decoration: none;

    &::before {
      content: ">>";
      position: relative;
      left: -4px;
    }
  }

  @media (max-width: 1440px) {
    z-index: 1;
    align-items: center;

    p {
      font-size: 18px;
      text-align: center;
    }

    a {
      font-size: 18px;
    }

    display: flex;
    flex-direction: column;
  }
`;
