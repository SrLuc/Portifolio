import React from "react";
import * as S from "./styles";

interface MeProps {}

const Me = ({}: MeProps) => {
  return (
    <S.StyledMe>
        <p>I'm a front end programmer focused on the mobile universe</p>
        <p>I have  skills to create visual, creative and innovative solutions</p>
        <p>I'm always looking for inspiration to improve my work.</p>
    </S.StyledMe>
  );
};

export default Me;
