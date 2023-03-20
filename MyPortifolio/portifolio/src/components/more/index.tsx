import React from "react";
import * as S from "./styles";

//images
import git from "../../assets/icons/git.svg";
import insta from "../../assets/icons/insta.svg";
import linkedin from "../../assets/icons/linkedin.svg";

interface MoreProps {}

const More = ({}: MoreProps) => {
  return (
    <S.StyledMore>
      <h1>More About Me</h1>
      <section>
        <a className="hvr-grow" href="https://github.com/SrLuc" target="_blank">
          <img src={git} alt="github" />
        </a>
        <a
          className="hvr-grow"
          href="https://www.linkedin.com/in/ruan-lucena-ramos-387623232/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          className="hvr-grow"
          href="https://www.instagram.com/prss.bob/"
          target="_blank"
        >
          <img src={insta} alt="instagram" />
        </a>
      </section>
    </S.StyledMore>
  );
};

export default More;
