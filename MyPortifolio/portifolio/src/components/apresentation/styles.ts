import styled from "styled-components";
import wallpaper from "../../assets/img/wallpaper.svg";

export const StyledApresentation = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${wallpaper});
  background-size: cover;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: flex-end;
    padding: 16px;

    img {
      width: 100px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 100%;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
      background-repeat: no-repeat;
    }
  }

  article {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    line-height: 50px;
    margin-top: 3%;
    width: 100%;
    padding: 30px;

    @media (max-width: 1000px) {
      margin-top: 10%;
    }

    @media (max-width: 900px) {
      margin-top: 10%;
    }

    @media (max-width: 800px) {
      margin-top: 10%;
    }

    @media (max-width: 600px) {
      margin-top: 30%;
      font-size: 20px;
    }

    @media (max-width: 400px) {
      margin-top: 50%;
      font-size: 20px;
    }

    @media (max-width: 375px) {
      margin-top: 30%;
      font-size: 1px;
    }

    p {
      font-weight: 400;
      font-size: 40px;
      line-height: 24px;
      text-align: center;
      line-height: 50px;
      color: #ffffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      @media (max-width: 375px) {
        font-size: 25px;
      }
    }
  }
`;
