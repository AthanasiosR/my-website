import React from "react";
import "./Pages.css";
import RidingPic from "../components/pictures/RidingPic.jpg";

function About() {
  return (
    <>
    
    <div className="about">
      <h1 className="aboutMeT">About Me :</h1>
      <div className="aboutMeInfo">
        <img src={RidingPic} className="ridingPic"></img>
        <p className="aboutMeP">
          I graduated from Concordia in December 2019 with a major in Urban
          Studies. While completing my major I became very interested in web
          development through online tutorials and classes. Once I graduated, I
          decided to pursue my interest in web development as a full time career
          by enrolling in Concordias Full-stack Web Development bootcamp. For
          the past year I've been working as a Full Stack web developer
          primerily working on front-end development. My main role has been to
          help create new features for websites as well as performing bug fixes.
        </p>
      </div>
    </div>
    </>
    
  );
}

export default About;
