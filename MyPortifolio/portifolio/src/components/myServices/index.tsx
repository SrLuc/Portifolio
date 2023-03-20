import React from "react";
import * as S from "./styles";

//icons
import { MdOutlineDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

interface MyServicesProps {
  children: React.ReactNode;
}

const MyServices = ({ children }: MyServicesProps) => {
  return (
    <S.StyledMyServices>
      <article>
        <h1>My Services</h1>
        <p className="hvr-grow">What Can i Do</p>
      </article>

      <section>
        <ServiceBox>
          <i>
            <MdOutlineDesignServices size={50} color="#fff" />
          </i>
          <h1>Web Design</h1>
          <p>
            I'm interested in web design and its practical practices, I'm always
            looking to create intuitive and accessible content I keep up to date
            with trends in design and technology to ensure that my projects are
            always adding value to users and businesses.
          </p>
        </ServiceBox>
        <ServiceBox>
          <i>
            <FaReact size={50} color="#fff" />
          </i>
          <h1>Web Development</h1>
          <p>
            As a developer, I am familiar with web development and React
            component architecture. I have TypeScript skills and am up to date
            with ReactJS trends and features to create modern and dynamic
            applications.
          </p>
        </ServiceBox>
        <ServiceBox>
          <i>
            <BiCodeAlt size={50} color="#fff" />
          </i>
          <h1>Systems Analyst</h1>
          <p>
            As an undergraduate student in Systems Analysis and Development, I
            am learning to design and develop information systems with the
            latest technologies and tools to create innovative and efficient
            solutions.
          </p>
        </ServiceBox>
      </section>
    </S.StyledMyServices>
  );
};

interface ServiceBoxProps {
  children?: React.ReactNode;
}

export const ServiceBox = ({ children }: ServiceBoxProps) => {
  return <S.StyledServiceBox className="hvr-fade">{children}</S.StyledServiceBox>;
};

export default MyServices;
