import React from 'react';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
  <div className="navbar-container">
    <a href="/NandiniMPrakash_Resume.pdf" target='_blank' rel="noopener noreferrer" className="resume">Resume</a>
    <ul className="nav-links">
      <li><a href="#skills">Skills</a></li>
      <li><a href="#profiles">Profiles</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</div>
    )
}
