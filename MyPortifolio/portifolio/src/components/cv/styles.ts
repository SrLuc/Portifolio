import styled from "styled-components";

export const StyledCV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 150px;
  padding: 0 10px;
`;

export const StyledButtonCV = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #332c21;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  margin: 5px;
  padding: 20px;

  a {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-decoration: none;
    color: #fffcfc;
  }
`;
