import styled from "styled-components";

export const StyledMore = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #332c21;

  h1 {
    padding: 15px;
    color: #fff;
    font-size: 40px;
  }

  section {
    padding: 30px;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;


    a{
        margin: 20px;
        img{
            width: 60px;
        }
    }
  }
`;
