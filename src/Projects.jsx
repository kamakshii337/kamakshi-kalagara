import React from 'react';
import './App.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <section>
        <h2>Black Fuel Roastery</h2>
        <p>
          Built a strong brand presence and increased footfall for a specialty
          coffee café in Jubilee Hills, Hyderabad.
        </p>
        <ul>
          <li>Performed market analysis and competitor study.</li>
          <li>Planned customer engagement campaigns.</li>
          <li>Developed an integrated marketing strategy.</li>
        </ul>
      </section>
      <section>
        <h2>Crowd Management in Temple Using IoT</h2>
        <p>
          Designed an IoT-based system to manage crowd density and enhance
          safety in heavily visited temples.
        </p>
        <ul>
          <li>Installed IR sensors to monitor real-time foot traffic.</li>
          <li>Developed a dashboard for live crowd data.</li>
          <li>Simulated the system in controlled environments.</li>
        </ul>
      </section>
      <section>
        <h2>Student Payment App (SPA)</h2>
        <p>
          Developed a student payment app to simplify transactions and provide
          a seamless campus payment solution.
        </p>
        <ul>
          <li>Conducted user research and SWOT analysis.</li>
          <li>Prototyped the user interface.</li>
          <li>Ensured compliance with data protection laws.</li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
