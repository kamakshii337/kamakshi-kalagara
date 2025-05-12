import React, { useState } from 'react';
import certificatesData from './certificatesData.json';
import macroeconomicsCert from './assets/macroeconomics_cert.jpg';
import digitalMarketingCert from './assets/digital_marketing_course_cert.jpg';
import businessCaseCert from './assets/business_case_development_cert.jpg';
import innovationCellCert from './assets/innovation_cell_mahindra_cert.jpg';
import './App.css';

// Map to correctly associate image imports
const imageMap = {
  '/src/assets/macroeconomics_cert.jpg': macroeconomicsCert,
  '/src/assets/digital_marketing_course_cert.jpg': digitalMarketingCert,
  '/src/assets/business_case_development_cert.jpg': businessCaseCert,
  '/src/assets/innovation_cell_mahindra_cert.jpg': innovationCellCert
};

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCertificateClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to get the correct image source
  const getImageSrc = (imagePath) => {
    return imageMap[imagePath] || imagePath; // Fallback to path if not found in map
  };

  return (
    <div className="certificates">
      <h1>Certificates & Achievements</h1>
      
      <p className="section-intro">
        Professional certifications and recognitions that have contributed to my academic
        and professional development in digital business technologies.
      </p>
      
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <div 
            key={cert.id} 
            className={`certificate-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleCertificateClick(index)}
          >
            <div className="certificate-img-container">
              <img src={getImageSrc(cert.image)} alt={`${cert.title} Certificate`} />
              <div className="cert-overlay">
                <span>View Details</span>
              </div>
            </div>
            
            <div className="certificate-content">
              <h2>{cert.title}</h2>
              
              {activeIndex === index && (
                <p className="cert-description">{cert.description}</p>
              )}
              
              <div className="certificate-meta">
                <div className="certificate-issuer">
                  <i className="cert-icon institution">🏢</i> {cert.issuer}
                </div>
                
                <div className="certificate-date">
                  <i className="cert-icon calendar">📅</i> {cert.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
