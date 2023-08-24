import styled from "styled-components";

export const Section = styled.section`
  background-color: #2d2e32;
`;

export const Container_Section = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 700px;
  }
  @media (max-width: 428px) {
    max-width: 380px;
  }

  h3 {
    margin-top: 165px;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    color: #fff;
    text-align: center;

    span {
      color: #f00000;
    }

    &::before {
      content: "{ ";
      color: #f00000;
    }
    &::after {
      content: " }";
      color: #f00000;
    }
  }

  .box-formations {
    margin-top: 139px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 99px;
  }

  .box {
    width: 412px;
    height: 286px;
    background-color: #25262a;
    border-radius: 10px;
    padding-left: 33px;
    padding-top: 29px;

    h2 {
      margin-top: 27px;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #9e9e9e;
    }
    p {
      margin-top: 31px;
      max-width: 273px;
      font-weight: 300;
      color: #9e9e9e;
      font-size: 15px;
      line-height: 17px;
    }
  }

  @media (max-width: 1440px) {
    max-width: 1110px;
    margin: 0 auto;

    h3 {
      margin-top: 120px;
    }

    .box-formations {
      margin-top: 80px;
    }

    .box {
      width: 412px;
      height: 286px;
      background-color: #25262a;
      border-radius: 10px;
      padding-left: 33px;
      padding-top: 29px;

      h2 {
        margin-top: 27px;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #9e9e9e;
      }
      p {
        margin-top: 31px;
        max-width: 290px;
        font-weight: 300;
        color: #9e9e9e;
        font-size: 15px;
        line-height: 17px;
      }
    }
  }

  @media (max-width: 885px) {
    max-width: 750px;
    margin: 0 auto;

    h3 {
      margin-top: 100px;
    }

    .box-formations {
      margin-top: 80px;
    }

    .box {
      width: 350px;
      height: 256px;
      padding-top: 20px;

      h2 {
        font-size: 15px;
        margin-top: 20px;
      }
      p {
        margin-top: 11px;
        font-size: 15px;
      }
    }
  }

  @media (max-width: 428px) {
    max-width: 380px;
    margin: 0 auto;
    .box-formations {
      margin-top: 139px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
      margin-bottom: 99px;

      .box {
        width: 380px;
        height: 286px;
        background-color: #25262a;
        border-radius: 10px;
        padding-left: 33px;
        padding-top: 29px;

        h2 {
          margin-top: 27px;
          font-weight: 700;
          font-size: 18px;
          line-height: 23px;
          color: #9e9e9e;
        }
        p {
          margin-top: 20px;
          max-width: 250px;
          font-weight: 300;
          color: #9e9e9e;
          font-size: 15px;
          line-height: 14px;
        }
      }
    }
  }
`;
