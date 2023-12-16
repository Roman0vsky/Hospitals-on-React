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
  min-height: 1370px;
  max-width: 500px;
  width: 100%;
  gap: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  gap: 50px;
  margin-right: 120px;
`;

export const H2 = styled.h2`
  font-size: 3rem;
  color: --var(--dark);
`