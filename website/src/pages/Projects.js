import React from "react";
import { ProjectsData } from "./ProjectsData";
import "./Pages.css";

function Projects() {
  return (
    <div className="ProjectMain">
      <h1 className="projectsTitle">Some of the projects I've made :</h1>

      <div className="projects">
        {ProjectsData.map((item, index) => {
          return (
            <div key={index} className="projectInfo">
              <img src={item.image} className="projectPic"></img>

              <div className="info">
                <h1 className="title">{item.title}</h1>
                <p className="description">{item.description}</p>

                <p className="languages">
                  <strong>Languages used:</strong> {item.languagesUsed}
                </p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  Link to source code
                </a>
                <span> </span>
                <a href={item.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
