import React from "react";
import "./Pages.css";
import Typed from "react-typed";
import ProfilePic from "../components/pictures/profilepic.jpeg";

function Home() {
  return (
    <div>
      <div className="home">
        <img src={ProfilePic} className="profilePic" alt="" />
        <div className="tag">
          <Typed
            strings={[
              '<br/>&lt;div&gt; <br/> &lt;h1 className:"welcome" &gt; <br/> Hi I\'m Tommy <br/> Full Stack Web Developer <br/> &lt;/h1&gt; <br/> &lt;/div&gt;',
            ]}
            typeSpeed={60}
          ></Typed>
        </div>
      </div>
    </div>
  );
}

export default Home;
