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
  gap: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1126px;
  width: 100%;
  gap: 20px;
`;

export const Calendar = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark);
  border: 4px solid var(--light);
  border-radius: 20px;
  width: 1150px;
  font-size: 3rem;
  margin-top: 110px;

  .today {
    border: 4px solid var(--light);
  }

  .active {
    background-color: var(--medium);
    cursor: pointer;
  }

  .active:hover {
    background-color: var(--light);
    color: var(--dark);
  }

  & th,
  & td {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    min-height: 100px;
  }
  & tr {
    display: flex;
    justify-content: center;
  }
`;
