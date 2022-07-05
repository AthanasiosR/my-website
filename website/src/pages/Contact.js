import React from "react";
import "./Pages.css";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contactT">Let's Connect : </h1>

      <div className="contactL">
        <h2>
          Follow me on Linkedin :{" "}
          <SocialIcon
            className="socialIcon"
            url="https://www.linkedin.com/in/tommy-rigas/"
            target="_blank"
            rel="noreferrer"
          />
        </h2>
        <h2>
          Check out my Github for more of my projects :{" "}
          <SocialIcon
            className="github"
            url="https://github.com/AthanasiosR"
            bgColor="white"
            target="_blank"
            rel="noreferrer"
          />
        </h2>
      </div>
    </div>
  );
}

export default Contact;
