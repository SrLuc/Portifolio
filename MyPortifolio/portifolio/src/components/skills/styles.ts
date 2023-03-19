import styled from "styled-components";

export const StyledSkills = styled.div`
  width: 100%;
  height: 400px;
  background: #acabab;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledRange = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #000;
      font-size: 20px;
    }
  }

  div {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
