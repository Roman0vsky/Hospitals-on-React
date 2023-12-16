import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 6px 16px;
  width: 1000px;
  min-height: 270px;
  border: 4px solid var(--dark);
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 8px 20px 3px var(--dark);
  }
`;

export const CardImg = styled.div<{ $background: string }>`
  max-width: 250px;
  max-height: 250px;
  width: 100%;
  background-image: url(${(props) => props.$background});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 100%;
`;
