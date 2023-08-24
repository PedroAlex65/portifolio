import styled from "styled-components";

export const Section = styled.section`
  background-color: #37383d;
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
  @media (max-width: 428px) {
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

export const Box = styled.div`
  margin-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-bottom: 255px;

  .swiper-wrapper {
    margin-top: 50px;
    display: flex;
  }
  .box-projects {
    display: flex;
    flex-direction: column;
    width: 445px;
    height: 462px;
    background-color: #2d2e32;
    padding-left: 35px;
    border-radius: 10px;

    .image-projects {
      width: 373px;
      height: 206px;
      margin-top: 21px;
    }

    h1 {
      margin-top: 20px;
      font-weight: 700;
      font-size: 30px;
      line-height: 35px;
      color: #fff;
    }

    p {
      max-width: 369px;
      margin-top: 20px;
      font-weight: 400;
      font-size: 15px;
      line-height: 17px;
      color: #fff;
    }

    .live {
      margin-top: 46px;
      align-items: center;
      display: flex;
      gap: 9px;
      cursor: pointer;

      h2 {
        font-weight: 900;
        font-size: 15px;
        line-height: 17px;
        color: #cf4645;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1440px) {
    .mySwiper {
      padding-bottom: 50px;
    }

    .swiper-wrapper {
      margin-top: 50px;
      display: flex;
      gap: 100px;
    }
    .box-projects {
      .live {
        margin-top: 46px;
        align-items: center;
        display: flex;
        gap: 9px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 885px) {
    .swiper-wrapper {
      justify-content: center;
      gap: 200px;
    }
    .box-projects {
      display: flex;
      flex-direction: column;
      width: 405px;
      height: 462px;
      padding-left: 35px;

      .image-projects {
        width: 343px;
        height: 206px;
      }
      p {
        max-width: 340px;
        margin-top: 20px;
      }
    }
  }
  @media (max-width: 428px) {
    .swiper-wrapper {
      justify-content: center;
      gap: 300px;
      align-items: center;
    }
    .box-projects {
      display: flex;
      flex-direction: column;
      width: 380px;
      height: 380px;
      padding-left: 35px;
      .image-projects {
        width: 310px;
        height: 206px;
      }
      h1 {
        margin-top: 10px;
        font-weight: 700;
        font-size: 25px;
        line-height: 35px;
        color: #fff;
      }

      p {
        max-width: 309px;
        margin-top: 10px;
        font-size: 12px;
      }

      .live {
        margin-top: 16px;
        align-items: center;
        display: flex;
        gap: 9px;
        cursor: pointer;
      }
    }
  }
`;
