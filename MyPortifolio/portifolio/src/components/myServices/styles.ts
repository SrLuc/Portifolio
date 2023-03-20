import styled from "styled-components";

export const StyledMyServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;

    h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }

    p {
      width: 50%;
      color: #332c21;
      padding-bottom: 15px;
      border-bottom: 1px solid #332c21;
    }
  }

  section {
    margin: 20px;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
`;

export const StyledServiceBox = styled.div`
  width: 320px;
  height: 310px;
  background: #332c21;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 10px;
  margin: 20px;

  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  i {
  }

  h1 {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #ffffff;

  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    color: #ffffff;
  }
`;
