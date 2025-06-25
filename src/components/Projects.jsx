import React from 'react';
import './Projects.css';


import wordleIcon from '../assets/wordle-icon.png';
import resumeIcon from '../assets/resume-icon.png';
import gymIcon from '../assets/gym-icon.png';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <p className="projects-subtitle">
        Here, you can find some of my recent projects. I'm learning my way to make something great soon!
      </p>

      <div className="projects-container">
        <div className="project-card">
          <img src={wordleIcon} alt="Wordle Icon" className="project-icon" />
          <h3 className="project-title">Wordle Clone</h3>
          <p className="project-description">
            A TERMINAL-BASED CLONE OF THE FAMOUS NYTIMES GAME, WORDLE, USING PYTHON AND RICH
          </p>
          <a href="https://github.com/nandini-mp/wordle-clone" target="_blank" rel="noopener noreferrer" className="github-button">
            VIEW IN GITHUB
          </a>
        </div>

        <div className="project-card">
          <img src={resumeIcon} alt="Resume Icon" className="project-icon resume-specific-icon" />
          <h3 className="project-title">Resume Suitability Checker</h3>
          <p className="project-description">
            USER TESTS SUITABILITY OF RESUME AGAINST VARIOUS ROLES AND GIVEN SUGGESTIONS FOR IMPROVEMENT, DEVELOPED USING PYTHON, STREAMLIT
          </p>
          <a href="https://github.com/nandini-mp/Resume-Suitability-Checker" target="_blank" rel="noopener noreferrer" className="github-button">
            VIEW IN GITHUB
          </a>
        </div>

        <div className="project-card">
          <img src={gymIcon} alt="Gym Icon" className="project-icon" />
          <h3 className="project-title">Gym Management System</h3>
          <p className="project-description">
            SYSTEM FOR MANAGEMENT OF MEMBERS, TRAINERS, EQUIPMENT, WORKOUTS AND MEMBERSHIP SCHEMES
          </p>
          <a href="https://github.com/nandini-mp/Gym-Management-System" target="_blank" rel="noopener noreferrer" className="github-button">
            VIEW IN GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;