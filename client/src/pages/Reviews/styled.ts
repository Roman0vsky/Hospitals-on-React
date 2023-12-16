import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  padding: 60px;
  margin: 0 auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 940px;
  max-width: 500px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  gap: 50px;
`;

export const TextArea = styled.textarea<{ $width?: string; $height?: string }>`
  display: flex;
  font-size: 2.5rem;
  padding: 10px 20px;
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "80px"};
  border: 4px solid var(--light);
  border-radius: 20px;
  background-color: var(--dark);
  transition: 0.1s linear;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--light);
    opacity: 1; /* Firefox */
    text-align: center;
    align-self: center;
    line-height: 400px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

export const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 20px;
`;
