import React from "react";
import * as S from "./styles";
import ProgressBar from "@ramonak/react-progress-bar";

interface SkillProps {}

export const Skill = ({}: SkillProps) => {
  return (
    <S.StyledSkills>
      <Range name="ReactJS" value={61}>
        <ProgressBar
          completed={61}
          bgColor="#F18F01"
          labelColor="#F18F01"
          baseBgColor="#574C3B"
          height="10px"
        ></ProgressBar>
      </Range>
      <Range name="Typescript" value={70}>
        <ProgressBar
          completed={70}
          bgColor="#F18F01"
          labelColor="#F18F01"
          baseBgColor="#574C3B"
          height="10px"
        ></ProgressBar>
      </Range>
      <Range name="Desing" value={75}>
        <ProgressBar
          completed={75}
          bgColor="#F18F01"
          labelColor="#F18F01"
          baseBgColor="#574C3B"
          height="10px"
        ></ProgressBar>
      </Range>
    </S.StyledSkills>
  );
};

interface RangeProps {
  name?: string;
  value?: number;
  children?: React.ReactNode;
}

export const Range = ({ name, value, children }: RangeProps) => {
  return (
    <S.StyledRange>
      <section className="hvr-float">
        <p>{name}</p>
        <p>{value}%</p>
      </section>
      {children}
    </S.StyledRange>
  );
};

export default Skill;
