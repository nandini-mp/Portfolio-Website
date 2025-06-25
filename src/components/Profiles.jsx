import React from 'react';
import './Profiles.css';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import leetcodeIcon from '../assets/leetcode-icon.png';
import instagramIcon from '../assets/instagram-icon.png';
import profileImage from '../assets/Drawing.png';

const Profiles = () => {
  return (
    <section className="profiles-section" id="profiles">
      <h2 className="section-title">Profiles</h2>
      <p className="subtitle">Find me on the Web</p>

      <div className="profiles-container">
        <a href="https://github.com/nandini-mp" target="_blank" rel="noopener noreferrer">
          <div className="profile-box github">
            <div className="profile-header">GitHub</div>
            <div className="profile-link">https://github.com/nandini-mp</div>
          </div>
        </a>
        <a href="https://github.com/nandini-mp" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="icon github" />
        </a>

        <a href="https://www.linkedin.com/in/nandini-m-prakash/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon linkedin" />
        </a>
        <a href="https://www.linkedin.com/in/nandini-m-prakash/" target="_blank" rel="noopener noreferrer">
          <div className="profile-box linkedin">
            <div className="profile-header">LinkedIn</div>
            <div className="profile-link">https://www.linkedin.com/in/nandini-m-prakash/</div>
          </div>
        </a>

        <div className="center-image">
          <img src={profileImage} alt="Nandini M Prakash" />
        </div>

        <a href="https://leetcode.com/u/nmp_06/" target="_blank" rel="noopener noreferrer">
          <div className="profile-box leetcode">
            <div className="profile-header">LeetCode</div>
            <div className="profile-link">https://leetcode.com/u/nmp_06/</div>
          </div>
        </a>
        <a href="https://leetcode.com/u/nmp_06/" target="_blank" rel="noopener noreferrer">
          <img src={leetcodeIcon} alt="LeetCode" className="icon leetcode" />
        </a>

        <a href="https://www.instagram.com/nmp__06/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="icon instagram" />
        </a>
        <a href="https://www.instagram.com/nmp__06/" target="_blank" rel="noopener noreferrer">
          <div className="profile-box instagram">
            <div className="profile-header">Instagram</div>
            <div className="profile-link">nmp__06</div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Profiles;