import styled from "styled-components";

export const Container_Header = styled.div`
  background-color: #2d2e32;
`;

export const ContainerHeader = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 24px;
  ul {
    display: flex;
    gap: 30px;
  }

  li {
    display: inline-block;
    position: relative;
    transition: 0.4s all ease;
    list-style: none;
    font-size: 21px;
    font-weight: 900;
    line-height: 24px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: #1cac80;
      transition: 0.4s all ease;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -5px;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.5s ease-out;
      background-color: #1cac80;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  @media (max-width: 1440px) {
    max-width: 1110px;
    margin: 0 auto;
  }
  @media (max-width: 820px) {
    max-width: 750px;
    margin: 0 auto;

    li {
      font-size: 18px;
    }
  }
  @media (max-width: 500px) {
    max-width: 380px;

    .menu {
      color: #fff;
    }
    ul {
      width: 250px;
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 30px;
      position: absolute;
      top: 52px;
      right: 25px;
      background-color: #25262a;

      li {
        font-size: 15px;

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -5px;
          left: 0;
          transform-origin: bottom right;
          transition: transform 0.5s ease-out;
          background-color: #1cac80;
        }

        &:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
    }
  }
`;
