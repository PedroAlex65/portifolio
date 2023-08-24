import styled from "styled-components";

export const Container_Footer = styled.footer`
  background-color: #2d2e32;
  height: 700px;
`;

export const Content_Footer = styled.footer`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 41px;

  .texts-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      margin-top: 87px;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #fff;
    }
    p {
      max-width: 498px;
      margin-top: 36px;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #fff;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 42px;
      gap: 25px;

      input {
        width: 498px;
        height: 62px;
        border-radius: 10px;
        background-color: #37383d;
        border: none;
        font-size: 20px;
        color: #9e9e9e;
        font-weight: 400;
        line-height: 23px;
        padding-left: 19px;
      }
    }
    .midia {
      display: flex;
      gap: 32px;
      margin-top: 40px;
    }
  }

  @media (max-width: 1440px) {
    max-width: 1110px;
    .texts-footer {
      display: flex;
      h1 {
        font-size: 35px;
      }
      p {
        max-width: 450px;
        font-size: 18px;
      }

      form {
        margin-top: 42px;
        gap: 25px;

        input {
          width: 450px;
          height: 62px;
        }
      }
      .midia {
        display: flex;
        gap: 32px;
        margin-top: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 700px;
    justify-content: center;

    .image-email {
      opacity: 0.1;
    }
    .texts-footer {
      display: flex;
      position: absolute;

      form {
        margin-top: 42px;
        gap: 25px;

        input {
          width: 450px;
          height: 62px;
        }
      }
      .midia {
        display: flex;
        gap: 32px;
        margin-top: 40px;
        justify-content: center;
      }
    }
  }
  @media (max-width: 428px) {
    max-width: 380px;
    justify-content: center;

    .image-email {
      margin-top: 100px;
      opacity: 0.1;
      width: 100%;
    }
    .texts-footer {
      display: flex;
      position: absolute;
      align-items: center;
/*  */
      h1 {
        font-size: 25px;
      }
      p {
        max-width: 380px;
        font-size: 15px;
        text-align: center;
      }

      form {
        margin-top: 42px;
        gap: 26px;

        input {
          width: 300px;
          height: 62px;
          font-size: 15px;
        }
      }
      .midia {
        display: flex;
        gap: 30px;
        margin-top: 40px;
        justify-content: center;
      }
    }
  }
`;
