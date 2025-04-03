import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
    Hi, my name is <b>Ramesh Nethi</b> and I am from India.
    I'm a <b>Full Stack Developer</b> with experience in <b>ReactJS, Node.js, Python</b>.
    <br />
    <br />
    I have worked as an <b>Associate Technical Consultant</b> at <b>Argano </b>, where I developed React components based on the given requirements,
    focusing on creating reusable components to minimize code duplication and improve maintainability
    <br />
    <br />
    Some of my key projects include <b>TTEC</b>, where I implemented various functionalities and 
    optimized their styling while enhancing performance to reduce web page loading time.
    <br />
    <br />
    I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, 
    links are in the footer.
    <br />
    Some of my hobbies include public speaking, Coding, and Building WebPages.
</p>

          <a href="public/img/rameshnethi_ReactJS_resume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="Typescript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="SQL" />
        <Skills skill="NodeJS" />
        <Skills skill="Python" />
      </div>
    </>
  );
};

export default About;
