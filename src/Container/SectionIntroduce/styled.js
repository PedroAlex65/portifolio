import styled from "styled-components";

export const Section = styled.section`
  background-color: #37383d;
  height: 1024px;
`;

export const Container_In_Section = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;

  h3 {
    padding-top: 172px;
    text-align: center;
    color: #fff;
    font-size: 30px;
    line-height: 35px;
    font-weight: 900;
    span {
      color: #ff0000;
    }

    &::before {
      content: "{ ";
      color: #ff0000;
    }
    &::after {
      content: " }";
      color: #ff0000;
    }
  }

  @media (max-width: 1440px) {
    max-width: 1110px;
  }
  @media (max-width: 768px) {
    max-width: 700px;

    h3 {
      padding-top: 122px;
    }
  }
  @media (max-width: 428px) {
    max-width: 380px;

    h3 {
      padding-top: 100px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 41px;
  margin-top: 169px;

  @media (max-width: 885px) {
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
  }
  @media (max-width: 428px) {
    align-items: center;
    flex-direction: column-reverse;
    margin-top: 60px;
  }
`;

export const Container_Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .teste {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    width: 700px;
    height: 93px;
    background-color: #25262a;
    border-radius: 10px;

    h4 {
      font-size: 21px;
      line-height: 24px;
      font-weight: 900;
      color: #fff;
      margin-top: 17px;
      margin-left: 10px;
    }
    h5 {
      color: #9e9e9e;
      font-size: 20px;
      line-height: 23px;
      font-weight: 700;
      margin-left: 10px;

      .languages-in-frameworks {
        &::before {
          content: "[ ";
          color: #ff0000;
        }
        &::after {
          content: " ]";
          color: #ff0000;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .teste {
      width: 600px;
      height: 93px;

      h4 {
        font-size: 20px;
      }
      h5 {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 428px) {
    .teste {
      width: 380px;

      h4 {
        font-size: 18px;
      }
      h5 {
        font-size: 12px;
      }
    }
  }
`;

export const Container_Introduce = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  h1 {
    font-size: 50px;
    color: #fff;
    font-weight: 700;
    line-height: 58px;
  }

  p {
    max-width: 703px;
    color: #fff;
    font-size: 25px;
    line-height: 20px;
    font-weight: 400;
  }

  a {
    margin-top: 10px;
    color: #d16a6a;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    text-decoration: none;

    &::before {
      content: ">> ";
    }
  }

  @media (max-width: 1440px) {
    h1 {
      font-size: 35px;
    }

    p {
      max-width: 703px;
      color: #fff;
      font-size: 18px;
    }
    a {
      font-size: 18px;
    }
  }

  @media (max-width: 885px) {
    gap: 10px;
    h1 {
      font-size: 30px;
    }

    p {
      max-width: 600px;
      font-size: 18px;
    }
    a {
      font-size: 18px;
    }
  }
  @media (max-width: 428px) {
    gap: 10px;
    h1 {
      text-align: center;
      font-size: 20px;
    }

    p {
      text-align: center;
      max-width: 600px;
      font-size: 13px;
    }
    a {
      text-align: center;
      font-size: 12px;
    }
  }
`;
