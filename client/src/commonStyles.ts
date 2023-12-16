import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .width100proc {
    width: 100%;
  }
`;

export const Page = styled(Wrapper)`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 30px 0;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input<{
  $width?: string;
  $height?: string;
  $disabled?: boolean;
}>`
  font-size: 2.5rem;
  padding: 0 20px;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "80px"};
  border: 4px solid var(--light);
  border-radius: 20px;
  background-color: var(--dark);
  transition: 0.1s linear;

  cursor: ${(props) => (props.$disabled ? "not-allowed" : "text")};
  /* color: ${(props) => (props.$disabled ? "#9d9d9d" : "#000")}; */

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--light);
    opacity: 1; /* Firefox */
    text-align: center;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--light);
    text-align: center;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--light);
    text-align: center;
  }

  &:hover {
    border-color: #fff;
  }

  &:focus::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
    color: #fff;
    border-color: #fff;
  }
`;

export const ErrorMessage = styled.p<{ $dark?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 5px;
  color: ${(props) => (props?.$dark ? "#07BEB8" : "#C4FFF9")};
`;

export const Button = styled.button<{
  $white?: boolean;
  $light?: boolean;
  $width?: string;
  $margin?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  height: 80px;
  min-width: 250px;
  border: 4px solid #07beb8;
  border-radius: 20px;
  background-color: ${(props) =>
    props.$white ? "#fff" : props.$light ? "#3DCCC7" : "#07BEB8"};

  color: ${(props) => (props.$white ? "#07BEB8" : "#fff")};
  width: ${(props) => props.$width || "auto"};
  margin: ${(props) => (props?.$margin ? props.$margin : "0px")};
  transition: 0.1s linear;

  &:hover {
    background-color: ${(props) =>
      props.$white ? "#07BEB8" : props.$light ? "#fff" : "#3DCCC7"};
    color: ${(props) =>
      props.$white ? "#fff" : props.$light ? "#07BEB8" : "#fff"};
  }

  &:active {
    background-color: ${(props) =>
      props.$white ? "#3DCCC7" : props.$light ? "#07BEB8" : "#fff"};
    color: ${(props) =>
      props.$white ? "#fff" : props.$light ? "#fff" : "#07BEB8"};
  }

  /* @media (max-width: 1500px) {
    & {
      max-width: 18rem;
    }
  } */
`;

export const Search = styled.input`
  font-size: 1.25rem;
  padding: 0 20px;
  max-width: 600px;
  width: 100%;
  height: 40px;
  border: 4px solid var(--light);
  border-radius: 20px;
  background-color: var(--dark);
  transition: 0.1s linear;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--light);
    opacity: 1; /* Firefox */
    text-align: center;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--light);
    text-align: center;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--light);
    text-align: center;
  }

  &:hover {
    border-color: #fff;
  }

  &:focus::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
    color: #fff;
    border-color: #fff;
  }

  @media (max-width: 1500px) {
    & {
      font-size: 20px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  color: var(--light);
  font-size: 2rem;
  font-weight: bold;
  border-radius: 40px;
  border: 2px solid var(--light);
  background-color: var(--dark);
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:active {
    color: #fff;
    border-color: #fff;
  }

  @media (max-width: 1303px) {
    & {
      order: 2;
      margin-left: 17%;
    }
  }

  @media (max-width: 1000px) {
    & {
      order: 2;
      margin-left: 14%;
    }
  }

  @media (max-width: 500px) {
    & {
      display: none;
    }
  }
`;

export const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0 auto 1.5rem;
  text-align: center;
  color: var(--dark);
  font-family: "Fredoka", sans-serif;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Text = styled.div<{
  $width?: string;
  $height?: string;
  $min_height?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  word-break: break-all;
  border: 4px solid var(--light);
  border-radius: 20px;
  background-color: var(--dark);
  width: 100%;
  height: ${(props) => (props?.$height ? props.$height : "80px")};
  min-height: ${(props) => (props?.$min_height ? props.$min_height : "45px")};
  min-width: 300px;
  max-width: ${(props) => (props?.$width ? props.$width : "100%")};
  padding: 10px 20px;

  @media (max-width: 450px) {
    min-width: 200px;
  }
`;

export const AvatarImg = styled.div<{
  $backgroundImg: string;
  $margin_bottom?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  height: 500px;
  width: 100%;
  background-image: url(${(props) => props.$backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: ${(props) =>
    props?.$margin_bottom ? props.$margin_bottom : "none"};
`;

//! do not use
//! do not use
//! do not use
//! do not use
//! do not use
//! do not use

export const Label = styled.label<{ $checkbox?: boolean; $height?: string }>`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  height: ${(props) => props.$height || (props.$checkbox ? "auto" : "56px")};
`;

export const Hr = styled.hr`
  margin-bottom: 1.5rem;
  border: 0.5px solid #000;
  width: 100%;
`;

export const StarsContainer = styled.div`
  display: flex;
`;

export const StarWrapper = styled.div<{ $isActive: boolean }>`
  position: relative;
  top: -1px;
  width: 1.5rem;
  height: 1.5rem;

  path {
    fill: ${(props) => (props.$isActive ? "#1b57ff" : "#bbbbbb")};
  }
`;
