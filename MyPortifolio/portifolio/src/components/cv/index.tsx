import React from "react";
import * as S from "./styles";

import cvpt from "./RuanCVen.pdf";
import cven from "./RuanCVen.pdf";

interface CvProps {}

export const Cv = ({}: CvProps) => {
  return (
    <S.StyledCV>
      <ButtonCV>
        <a
          href="https://drive.google.com/file/d/1pqFVYsJvEwqw_vWEV-GSF20ZaVfghJW-/view?usp=sharing"
          target="_blank"
        >
          My Resume (pt-br)
        </a>
      </ButtonCV>
      <ButtonCV>
        <a
          href="https://drive.google.com/file/d/1ritmj4iiciT5U4lc24eJy7ZeRE7eE5y6/view?usp=sharing"
          target="_blank"
        >
          My Resume CV (en-us)
        </a>
      </ButtonCV>
    </S.StyledCV>
  );
};

interface ButtonCVProps {
  children?: React.ReactNode;
}

export const ButtonCV = ({ children }: ButtonCVProps) => {
  return <S.StyledButtonCV className="hvr-grow">{children}</S.StyledButtonCV>;
};

export default Cv;
