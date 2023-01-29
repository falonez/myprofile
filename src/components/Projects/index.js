import React from "react";
import "./projects.css";
import ImageUPI from "../../assets/images/upi/Picture2.png";
import Flywithme from "../../assets/images/flywithme/Cover.png";

const Projects = () => {
  const data = [
    {
      id: 1,
      title: "Application for letter submission",
      description:
        "Application for sending letters to students Application for submitting letters for college students at UPI",
      image: ImageUPI,
      detail: "#/",
      website: "#/",
    },
    // {
    //   id: 2,
    //   title: "Project 1",
    //   description: "Project 2 description",
    //   image: "https://i.ibb.co/0nQqZ3r/1.png",
    //   detail: "#/",
    //   website: "#/",
    // },
    {
      id: 3,
      title: "Application for Booking Tiket",
      description: "Flight ticket booking application with complete features",
      image: Flywithme,
      detail: "#/",
      website: "#/",
    },
  ];
  return (
    <>
      <div className="projects" id="projects">
        <h1>Project</h1>
        <div className="menu-card-projects">
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
                    <a href={item.detail}>Detail</a>
                    {/* <a href="#/">{item.website}</a> */}
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
