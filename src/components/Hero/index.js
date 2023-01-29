import React from "react";
import "./hero.css";
import { BgHero } from "../../assets";

const Hero = () => {
  return (
    <>
      <div className="hero" id="home">
        <div className="hero-text">
          <h1 className="hero-title">Fathan Mubarok</h1>
          <h2 className="hero-subtitle">Frontend Developer | Web Developer</h2>
        </div>
        <div className="bg-hero">
          <img src={BgHero} className="image-hero" alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
