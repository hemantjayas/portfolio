
import Link from "react-scroll/modules/components/Link";
import React from "react";
import("./Navbar.css");
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Hemant</h1>
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
          <i class="fas fa-bars"></i>
        </label>
      </div>
      <ul className="nav-ul">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="skill" smooth={true} duration={500} >
          <li>Skill</li>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <li>Project</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
        <a
          href="https://drive.google.com/file/d/1DfQVOy8uxb6SM5BcvMyHbFmBAQJRYKrb/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <li>Resume</li>
        </a>
      </ul>
    </div>
  );
}
