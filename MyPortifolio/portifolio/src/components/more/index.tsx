import React from "react";
import * as S from "./styles";

//images
import git from '../../assets/icons/git.svg'
import insta from '../../assets/icons/insta.svg'
import linkedin from '../../assets/icons/linkedin.svg'



interface MoreProps {}

const More = ({}: MoreProps) => {
  return (
    <S.StyledMore>
      <h1>More About Me</h1>
      <section>
        <a href=""><img src={git} alt="github" /></a>
        <a href=""><img src={linkedin} alt="linkedin" /></a>
        <a href=""><img src={insta} alt="instagram" /></a>
      </section>
    </S.StyledMore>
  );
};

export default More;
