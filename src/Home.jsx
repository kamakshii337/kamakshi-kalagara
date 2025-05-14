import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from './assets/profile_pic.jpg';
import './App.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="profile-pic-container">
          <img 
            src={profilePic} 
            alt="Kamakshi Keerthana Kalagara" 
            className="profile-pic" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none';
              console.error('Failed to load profile image');
            }}
          />
        </div>
        <h1>Kamakshi Keerthana Kalagara</h1>
        <p>Bachelor of Business Administration in Digital Technologies</p>
        <p>Mahindra University, Telangana</p>
          {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/kamakshi-kalagara-150a7125b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:Kamakshi.kalagara@gmail.com" aria-label="Email" className="social-icon email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </a>
        </div>
      </header>
      
      <section className="home-content">
        <h2>About Me</h2>
        <p>
          I am a business student with a passion for digital technologies and a
          strong foundation in business management. My professional experience includes
          human resources, digital marketing, and project management. I am committed to 
          continuous learning and professional growth in the evolving digital landscape.
        </p>
        
        <div className="home-cta-buttons">
          <NavLink to="/portfolio" className="cta-button primary">
            View My Portfolio <span className="cta-arrow">→</span>
          </NavLink>
          <NavLink to="/projects" className="cta-button secondary">
            Explore Projects <span className="cta-arrow">→</span>
          </NavLink>
        </div>
        
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-group">
            <h3>Technical Skills</h3>
            <ul>
              <li>MS Office Suite (Word, Excel, PowerPoint)</li>
              <li>Altair AI</li>
              <li>Python (basics)</li>
              <li>Power BI (basics)</li>
              <li>Tally (basics)</li>
            </ul>
          </div>
          
          <div className="skills-group">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Leadership</li>
              <li>Time Management</li>
              <li>Critical Thinking</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
        
        <div className="contact-info">
          <h3>Contact Me</h3>
          <p>Email: Kamakshi.kalagara@gmail.com</p>
          <p>Phone: +91-9959037727</p>
          <p>Location: Hyderabad, Telangana, India</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
