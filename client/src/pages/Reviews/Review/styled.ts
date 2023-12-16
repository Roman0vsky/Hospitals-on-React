import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 6px 16px;
  max-width: 1000px;
  width: 100%;
  min-height: 270px;
  border: 4px solid var(--dark);
  transition: 0.2s linear;
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
  gap: 15px;
  height: 100%;
`;

export const Inner = styled.div`
  display: flex;
  gap: 15px;
  min-height: 45px;
  width: 100%;
`;