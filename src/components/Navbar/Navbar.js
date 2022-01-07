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
        <li>Resume</li>
      </ul>


    </div>
  );
}
