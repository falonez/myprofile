import React from "react";
import "./navbar.css";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Fathan Mubarok</a>
        </div>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navbar-extra">
          <a href="https://github.com/falonez" target={"blank"}>
            <Github size={20} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/fathan-mubarok-2597171b5/"
            target={"blank"}
          >
            <Linkedin size={20} className="icon" />
          </a>
          <a href="https://www.instagram.com/falonez15/" target={"blank"}>
            <Instagram size={20} className="icon" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
