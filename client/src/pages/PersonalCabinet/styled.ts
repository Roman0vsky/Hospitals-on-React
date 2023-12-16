import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  height: 100%;
  padding: 1.5rem 60px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 1800px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  min-height: 740px;
  max-width: 500px;
  align-items: center;
`;

export const InputErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 114px;
  height: auto;
`;
