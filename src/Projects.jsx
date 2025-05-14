import React, { useState } from 'react';
import './App.css';

const projectsData = [
  {
    id: 1,
    title: "Capstone Presentation - Black Fuel Roastery",
    description: "limited adoption of digital mental health solutions in India.",
    points: [
      "To gain firsthand insights into the adoption and perception of digital mental health solutions, we conducted interviews with professionals from both the mental health and corporate/educational sectors",
      "In addition to expert interviews, we conducted a focus group discussionwith 10 students currently pursuing their education in the field of psychology at the Arundhathi Institute of Medical Sciences And Hospital.",
      "The session was held on campus in a classroom setting and lasted approximately 60 minutes.",
    ],
    tags: ["Digital Mental Health", "Research", "Interviews", "Focus Group Discussion", "Presentation"],
    presentation: "/assets/Capstone presentation.pdf"
  },
  {
    id: 2,
    title: "Crowd Management in Temple Using IoT",
    description: "Designed an IoT-based system to manage crowd density and enhance safety in heavily visited temples.",
    points: [
      "Installed IR sensors at multiple entry and exit points to monitor real-time foot traffic.",
      "Integrated Arduino microcontroller to collect sensor data and determine crowd levels.",
      "Used threshold-based alert mechanism to trigger automatic warnings when the crowd exceeded safe limits.",
      "Developed a dashboard for temple authorities to view live crowd data and trends for timely action.",
      "Simulated the system in controlled environments to test sensor accuracy and communication latency.",
      "Planned for future integration with LED signage and mobile alerts for public guidance.",
      "Successfully built and tested a smart crowd monitoring system to ensure public safety and prevent overcrowding."
    ],
    tags: ["IoT", "Arduino", "Crowd Management", "Safety Systems", "Sensor Integration"]
  },
  {
    id: 3,
    title: "Student Payment App (SPA)",
    description: "Developed a student payment app that empowers students and simplifies transactions, providing a seamless campus payment solution.",
    points: [
      "Conducted thorough User Research via surveys, interviews, and focus groups with students.",
      "Performed SWOT analysis of existing payment apps to identify market gaps.",
      "Prototyped the user interface with Wireframes, Mockups, and User Testing.",
      "Established strategic partnerships for implementation and adoption.",
      "Implemented risk management and compliance strategies for data protection laws (GDPR) and payment industry standards (PCI-DSS).",
      "Successfully developed and launched the SPA, enabling students to effortlessly manage campus transactions."
    ],
    tags: ["FinTech", "UX/UI Design", "Market Research", "Digital Payments", "Compliance"]
  },
  {
    id: 4,
    title: "Marketplace Simulations",
    description: "Managed a 3D-printed carbon fiber bike company within a simulated marketplace, bringing it to success by handling all aspects of the business.",
    points: [
      "Developed a comprehensive business plan and budget allocation strategy.",
      "Led the hiring process, selecting and onboarding team members.",
      "Designed and launched marketing campaigns to build brand awareness.",
      "Implemented strategies to enhance customer satisfaction and retention.",
      "Negotiated with a venture capitalist to secure investment for company growth.",
      "Successfully achieved business success, demonstrating effective management and strategic planning."
    ],
    tags: ["Business Strategy", "Financial Planning", "Team Leadership", "Customer Satisfaction", "Venture Capital"]
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
        A collection of academic and professional projects showcasing my expertise in business strategy, 
        market analysis, digital technology implementation, and innovative problem-solving.
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
            className={`project-card ${activeProject === project.id ? 'active' : ''} ${project.id === 1 ? 'featured-project' : ''}`}
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
              {project.presentation && (
                <button 
                  className="view-presentation-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent toggling the project details
                    // Handle GitHub Pages base URL for production
                    const basePath = import.meta.env.BASE_URL || '/';
                    window.open(`${basePath}${project.presentation.replace(/^\//, '')}`, '_blank');
                  }}
                >
                  View Capstone PDF
                </button>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
