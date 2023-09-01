import styled from "styled-components";

export const Section = styled.section`
  background-color: #37383d;
  padding-bottom: 60px;
`;

export const Container_Projects = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 93px;

  h3 {
    font-size: 30px;
    font-weight: 900;
    line-height: 35px;
    color: #fff;
    text-align: center;

    &::before {
      content: "{ ";
      color: #ff0000;
    }

    &::after {
      content: " }";
      color: #ff0000;
    }
    span {
      color: #ff0000;
    }
  }

  .categories {
    display: flex;
    gap: 43px;
    margin-top: 71px;
    justify-content: center;
    align-items: center;

    button {
      width: 225px;
      height: 57px;
      background-color: #2d2e32;
      border-radius: 30px;
      font-size: 25px;
      line-height: 29px;
      font-weight: 900;
      border: none;
      color: #fff;

      &:hover {
        background-color: #1cac80;
      }
    }
  }

  @media (max-width: 1440px) {
    max-width: 1110px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    max-width: 700px;
    margin: 0 auto;
    padding-top: 130px;
  }
  @media (max-width: 500px) {
    max-width: 380px;
    margin: 0 auto;
    padding-top: 130px;

    .categories {
      gap: 10px;
      margin-top: 50px;

      button {
        height: 47px;
        font-size: 12px;
      }
    }
  }
`;
