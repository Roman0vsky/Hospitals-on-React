import styled from "styled-components";

export const Wrap = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #07beb8;
  width: 100%;
  z-index: 100;

  .link {
    width: 226px;
    outline: none;
    text-decoration: none;
    max-width: 15rem;
  }

  .header-btn {
  }

  .hidden-menu {
    display: block;
    position: fixed;
    list-style: none;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
    width: 50%;
    background-color: var(--dark);
    height: 100%;
    top: 0;
    left: -50%;
    transition: left 0.2s;
    z-index: 2;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }

  .hidden-menu-ticker {
    display: none;
  }

  .btn-menu {
    display: none;
    position: fixed;
    color: #fff;
    top: 13px;
    left: 7%;
    cursor: pointer;
    transition: left 0.23s;
    z-index: 3;
    min-width: 50px;
    height: 100%;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }

  .btn-menu span {
    display: block;
    height: 5px;
    background-color: var(--light);
    margin: 10px 0 0;
    transition: all 0.1s linear 0.23s;
    position: relative;
    border-radius: 50px;
    cursor: pointer;
  }
  .btn-menu span.first {
    margin-top: 0;
  }

  .hidden-menu-ticker:checked ~ .btn-menu {
    left: 43%;
    display: flex;
    justify-content: center;
  }
  .hidden-menu-ticker:checked ~ .hidden-menu {
    left: 0;
  }
  .hidden-menu-ticker:checked ~ .btn-menu span.first {
    position: absolute;
    -webkit-transform: rotate(45deg);
    width: 60px;
    top: 15px;
  }
  .hidden-menu-ticker:checked ~ .btn-menu span.second {
    opacity: 0;
  }
  .hidden-menu-ticker:checked ~ .btn-menu span.third {
    position: absolute;
    -webkit-transform: rotate(-45deg);
    width: 60px;
    margin: 0;
    top: 15px;
  }

  @media (max-width: 1500px) {
    .link {
      min-width: 15rem;
    }
  }

  @media (max-width: 1303px) {
    .btn-menu {
      display: block;
    }
    .header-btn {
      display: none;
    }
  }

  @media (max-width: 850px) {
    .hidden-menu-ticker:checked ~ .btn-menu {
      left: 40%;
    }
  }

  @media (max-width: 700px) {
    .link {
      display: none;
    }
    .hidden-menu {
      width: 300px;
      left: -300px;
    }
    .hidden-menu-ticker:checked ~ .btn-menu {
      left: 230px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  width: 90%;
  gap: 20px;

  @media (max-width: 1303px) {
    & {
      padding-left: 70px;
      gap: 2%;
      width: 86%;
      justify-content: flex-end;
      padding-left: 18%;
    }
  }
`;

export const HeaderLink = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: "Fredoka", sans-serif;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #fff;
    text-decoration: underline;
  }
`;

export const MenuText = styled.p`
  font-size: 1.75rem;
  font-weight: 500;
  margin: 30px 5%;
  line-height: 40px;
  cursor: pointer;

  &:active {
    color: #4c7bff;
  }
`;
