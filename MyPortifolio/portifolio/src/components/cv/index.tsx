import React from "react";
import * as S from "./styles";

import cvpt from '../../assets/curriculum/RuanCVpt.pdf'
import cven from '../../assets/curriculum/RuanCVpt.pdf'


interface CvProps {}

export const Cv = ({}: CvProps) => {
  return (
    <S.StyledCV>
      <ButtonCV>
      <a  href={cvpt} download={'RuanCVpt.pdf'}>Download CV (pt-br)</a>
      </ButtonCV>
      <ButtonCV>
      <a href={cven} download={'RuanCVen.pdf'}>Download CV (en-us)</a>
      </ButtonCV>
    </S.StyledCV>
  );
};

interface ButtonCVProps {
  children?: React.ReactNode;
}

export const ButtonCV = ({ children }: ButtonCVProps) => {
  return <S.StyledButtonCV className="hvr-grow" >{children}</S.StyledButtonCV>;
};

export default Cv;
