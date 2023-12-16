import { Wrapper } from "src/commonStyles";
import styled from "styled-components";

export const Content = styled(Wrapper)`
  max-width: 700px;
  width: 100%;
  min-height: 870px;
  background-color: #07beb8;
  border-radius: 20px;
  padding: 30px 65px;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: "Fredoka", sans-serif;
  width: 100%;

  .span {
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  .underline {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Box = styled.div<{ $width?: string; $checkbox?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 618px;
  width: ${(props) => props.$width || "100%"};
  align-self: ${(props) => (props.$checkbox ? "center" : "auto")};
`;
