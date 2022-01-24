import coding from "./coding.gif";
import React from "react";
import("./About.css");

export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div className="cont">
        <div id="img">
          <img src={coding} alt="" />
        </div>
        <div>
          <p>I am a Full-Stack Web Developer from India. Self motivated and curious with a keen interest in building user friendly products.  My Field of Interests are Building new Web Technologies, Products
            and also in Areas Related to Deep Learning. I Love to Create Beautiful and Efficient Websites for Users.
            I Apply my Passion for Developing Products with Node.js, Modern
            Javascript Library, Frameworks like React.js and Next.js</p>
          
        </div>
      </div>
    </div>
  );
}
