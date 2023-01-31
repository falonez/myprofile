import React from "react";
import "./projects.css";
import ImageUPI from "../../assets/images/upi/Picture2.webp";
import Flywithme from "../../assets/images/flywithme/Cover.webp";
import Roxy from "../../assets/images/roxy/cover.webp";

const Projects = () => {
  const data = [
    {
      id: 1,
      title: "Application for letter submission",
      description:
        "Application for sending letters to students Application for submitting letters for college students at UPI",
      image: ImageUPI,
      github: "",
      website: "",
    },
    {
      id: 2,
      title: "Application Roxy pharmacy",
      description: "Applications used in data processing pharmacies",
      image: Roxy,
      github: "",
      website: "https://apotek.mahanuri.com",
    },
    {
      id: 3,
      title: "Application for Booking Tiket",
      description: "Flight ticket booking application with complete features",
      image: Flywithme,
      github: "https://github.com/Binar-FP/FE-Final-Project",
      website: "https://flywithme.my.id/",
    },
  ];

  window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 1200) {
      document.getElementById("menu-card-projects").classList.add("active");
      document.getElementById("text-project").classList.add("active");
    }
  });
  return (
    <>
      <div className="projects" id="projects">
        <h1 className="text-project" id="text-project">
          Project
        </h1>
        <div className="menu-card-projects" id="menu-card-projects">
          {data.map((item) => {
            return (
              <div className="card-projects">
                <div className="card-image-projects">
                  <img src={item.image} alt="1" border="0"></img>
                </div>
                <div className="card-text-projects">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="link-projects">
                    {item.github !== "" ? (
                      <a href={item.github} target="blank">
                        Github
                      </a>
                    ) : null}
                    {item.website !== "" ? (
                      <a href={item.website} target="blank">
                        Website
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
