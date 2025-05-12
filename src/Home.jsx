import React from 'react';
import profilePic from './assets/profile_pic.jpg';
import './App.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Kamakshi Keerthana Kalagara</h1>
        <p>Bachelor of Business Administration in Digital Technologies</p>
        <p>Mahindra University, Telangana</p>
      </header>
      <section className="home-content">
        <h2>About Me</h2>
        <p>
          I am a business student with a passion for digital technologies and a
          strong foundation in business management. I have experience in human
          resources, digital marketing, and project management, and I am
          committed to continuous learning and professional growth.
        </p>
      </section>
    </div>
  );
};

export default Home;
