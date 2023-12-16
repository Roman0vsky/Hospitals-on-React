import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  width: 100%;
  padding: 1.5rem 40px;

  @media (max-width: 800px) {
    padding: 1.5rem 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 3rem;
  color: --var(--dark);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  margin: 0 auto;

    @media (max-width: 1000px) {
    gap: 30px
  }
`;
