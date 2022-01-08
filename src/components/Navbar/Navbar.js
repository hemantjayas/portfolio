import React from "react";
import("./Navbar.css");

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Hemant</h1>
      </div>


      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skill</li>
        <li>Project</li>
        <li>Contect</li>
        <a href="https://drive.google.com/file/d/1DfQVOy8uxb6SM5BcvMyHbFmBAQJRYKrb/view?usp=sharing" target="_blank" rel="noreferrer"><li>Resume</li></a>
      </ul>


    </div>
  );
}
