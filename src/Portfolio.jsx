import React, { useState } from 'react';
import './App.css';

// Import portfolio assets - using direct URLs instead of imports for PDF files
const internshipCertificate = '/src/assets/internship_certificate.pdf';
const internshipLetter = '/src/assets/internship_letter.pdf';
const capstonePresentation = '/src/assets/Capstone presentation.pdf';

const portfolioItems = [
  {
    id: 1,
    category: 'work-experience',
    title: 'HR Intern - GSS INFOTECH, Hyderabad',
    date: '2025',
    description: 'As a Human Resources intern at GSS INFOTECH, I gained valuable hands-on experience in recruitment, onboarding, and compliance.',
    responsibilities: [
      'Managed end-to-end recruitment processes, including sourcing, screening, and interviewing candidates',
      'Collaborated with department heads to understand workforce requirements and create tailored hiring strategies',
      'Ensured compliance with employment laws and company policies during the hiring process',
      'Optimized onboarding procedures, improving new hire integration and satisfaction'
    ],
    skills: ['Recruitment', 'HR Operations', 'Candidate Evaluation', 'Onboarding', 'Compliance'],
    documents: [
      { name: 'Internship Certificate', file: internshipCertificate },
      { name: 'Internship Letter', file: internshipLetter }
    ]
  },
  {
    id: 2,
    category: 'capstone',
    title: 'Black Fuel Roastery Marketing Strategy',
    date: '5th Semester',
    description: 'Led a comprehensive marketing strategy development for a specialty coffee café in Jubilee Hills, Hyderabad, focused on increasing brand presence and customer footfall.',
    highlights: [
      'Conducted market analysis and competitor research to identify target demographics',
      'Developed customer engagement strategies including influencer collaborations',
      'Created an integrated social media approach with emphasis on Instagram and Google listings',
      'Successfully established the café as a go-to destination for coffee enthusiasts'
    ],
    skills: ['Market Analysis', 'Brand Development', 'Digital Marketing', 'Customer Engagement'],
    documents: [
      { name: 'Capstone Presentation', file: capstonePresentation }
    ]
  },
  {
    id: 3,
    category: 'project',
    title: 'IoT-Based Crowd Management System',
    date: '5th Semester',
    description: 'Designed and developed an innovative IoT solution for managing crowd density in temples, enhancing visitor safety and improving operational efficiency.',
    highlights: [
      'Implemented IR sensors at entry and exit points for real-time foot traffic monitoring',
      'Integrated Arduino microcontroller for data collection and threshold-based alerts',
      'Developed a monitoring dashboard for temple authorities to view crowd metrics',
      'Tested the system in controlled environments with high accuracy results'
    ],
    skills: ['IoT Architecture', 'Arduino', 'Sensor Integration', 'Data Visualization'],
    link: null
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedItem, setExpandedItem] = useState(null);
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  
  const openDocument = (file) => {
    window.open(file, '_blank');
  };
  
  return (
    <div className="portfolio-page">
      <h1>Professional Portfolio</h1>
      
      <p className="section-intro">
        A collection of my professional experiences, capstone project, and key academic achievements 
        that showcase my skills and growth in the field of Business Administration with Digital Technologies.
      </p>
      
      <div className="portfolio-filters">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Items
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'work-experience' ? 'active' : ''}`}
          onClick={() => setActiveFilter('work-experience')}
        >
          Work Experience
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'capstone' ? 'active' : ''}`}
          onClick={() => setActiveFilter('capstone')}
        >
          Capstone Project
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'project' ? 'active' : ''}`}
          onClick={() => setActiveFilter('project')}
        >
          Other Projects
        </button>
      </div>
      
      <div className="portfolio-items">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className={`portfolio-item ${expandedItem === item.id ? 'expanded' : ''}`}
            onClick={() => toggleExpand(item.id)}
          >
            <div className="portfolio-item-header">
              <h2>{item.title}</h2>
              <span className="portfolio-item-date">{item.date}</span>
            </div>
            
            <p className="portfolio-item-description">{item.description}</p>
            
            <div className={`portfolio-item-details ${expandedItem === item.id ? 'show' : ''}`}>
              <div className="portfolio-item-content">
                {item.responsibilities && (
                  <div className="portfolio-responsibilities">
                    <h3>Responsibilities</h3>
                    <ul>
                      {item.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.highlights && (
                  <div className="portfolio-highlights">
                    <h3>Project Highlights</h3>
                    <ul>
                      {item.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.skills && (
                  <div className="portfolio-skills">
                    <h3>Skills Applied</h3>
                    <div className="portfolio-skills-list">
                      {item.skills.map((skill, index) => (
                        <span key={index} className="portfolio-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {item.documents && item.documents.length > 0 && (
                  <div className="portfolio-documents">
                    <h3>Related Documents</h3>
                    <div className="portfolio-documents-list">
                      {item.documents.map((doc, index) => (
                        <button 
                          key={index}
                          className="portfolio-document-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            openDocument(doc.file);
                          }}
                        >
                          <span className="document-icon">📄</span>
                          {doc.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="portfolio-item-footer">
              <button className="view-details-btn">
                {expandedItem === item.id ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
