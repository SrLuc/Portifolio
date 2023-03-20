import React from "react";
import * as S from "./styles";
import me1 from "../../assets/img/me1.svg";

interface ApresentationProps {}

const Apresentation = ({}: ApresentationProps) => {
  return (
    <S.StyledApresentation>
      <header>
        <img src={me1} alt="" />
      </header>
      <article className="hvr-bob">
        <p>Hello</p>
        <p>I'm Ruan Ramos</p>
        <p>
          I'm <strong>Developer</strong> & <strong>UX Design</strong>
        </p>
      </article>
    </S.StyledApresentation>
  );
};

export default Apresentation;
