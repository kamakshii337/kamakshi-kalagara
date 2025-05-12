import React, { useState } from 'react';
import './App.css';

const projectsData = [
  {
    id: 1,
    title: "Black Fuel Roastery",
    description: "Built a strong brand presence and increased footfall for a specialty coffee café in Jubilee Hills, Hyderabad.",
    points: [
      "Performed market analysis and competitor study to identify target demographics and brand positioning.",
      "Planned customer engagement campaigns including influencer collaborations and feedback contests.",
      "Developed an integrated marketing strategy with a focus on Instagram and Google listings.",
      "Successfully increased online engagement and customer visits by creating a consistent digital brand identity."
    ],
    tags: ["Marketing", "Brand Development", "Market Analysis"]
  },
  {
    id: 2,
    title: "Crowd Management in Temple Using IoT",
    description: "Designed an IoT-based system to manage crowd density and enhance safety in heavily visited temples.",
    points: [
      "Installed IR sensors at multiple entry and exit points to monitor real-time foot traffic.",
      "Integrated Arduino microcontroller to collect sensor data and determine crowd levels.",
      "Developed a dashboard for temple authorities to view live crowd data and trends.",
      "Successfully built and tested a smart crowd monitoring system for religious institutions."
    ],
    tags: ["IoT", "Crowd Management", "Safety Systems"]
  },
  {
    id: 3,
    title: "Student Payment App (SPA)",
    description: "Developed a student payment app to simplify transactions and provide a seamless campus payment solution.",
    points: [
      "Conducted thorough User Research via surveys, interviews, and focus groups with students.",
      "Conducted the SWOT analysis of existing payment apps to identify market gaps.",
      "Prototyped the user interface with Wireframes, Mockups, and User Testing.",
      "Implemented risk management and compliance strategies for data protection laws."
    ],
    tags: ["FinTech", "UX/UI Design", "Market Research"]
  },
  {
    id: 4,
    title: "Marketplace Simulations",
    description: "Managed a 3D-printed carbon fiber bike company within a simulated marketplace, driving it towards success.",
    points: [
      "Developed a comprehensive business plan and budget allocation strategy.",
      "Led the hiring process, selecting and onboarding team members.",
      "Designed and launched marketing campaigns to build brand awareness.",
      "Successfully secured investment from venture capitalist, demonstrating effective strategic planning."
    ],
    tags: ["Business Strategy", "Financial Planning", "Team Leadership"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  
  // Get unique tags from all projects
  const allTags = ['all', ...new Set(projectsData.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
    
  return (
    <div className="projects">
      <h1>Projects</h1>
      
      <p className="section-intro">
        A collection of academic and professional projects showcasing my skills in business strategy, 
        market analysis, and digital technology implementation.
      </p>
      
      <div className="project-filters">
        {allTags.map(tag => (
          <button 
            key={tag} 
            className={`filter-btn ${filter === tag ? 'active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <div className="projects-container">
        {filteredProjects.map(project => (
          <section 
            key={project.id}
            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
          >
            <div className="project-header">
              <h2>{project.title}</h2>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <div className={`project-details ${activeProject === project.id ? 'show' : ''}`}>
              <ul>
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-footer">
              <span className="view-more">
                {activeProject === project.id ? 'Show Less' : 'View Details'}
              </span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
