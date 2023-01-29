import React from "react";
import "./about.css";
import { Profile } from "../../assets";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-image">
          <img src={Profile} alt=""></img>
        </div>
        <div className="about-text">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            I am a 6th semester student at STMIK Mardira Indonesia, with a
            strong interest in web development, pecifically in front-end
            development. I have acquired a good understanding of the
            technologies and skills required in these areas through my studies
            and practice. I am now ready to take on internships and
            opportunities to put my knowledge into practice, and make a
            meaningful contribution to the projects and people I work with.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
