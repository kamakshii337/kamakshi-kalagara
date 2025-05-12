import React, { useState, useEffect } from 'react';
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
  const [previewCert, setPreviewCert] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showPreview) {
        closePreview();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    // If modal is open, prevent body scrolling
    if (showPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [showPreview]);

  const handleCertificateClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openPreview = (cert, e) => {
    e.stopPropagation(); // Prevent triggering parent onClick
    setPreviewCert(cert);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    // Wait for animation to complete
    setTimeout(() => {
      setPreviewCert(null);
    }, 300);
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
                <button 
                  className="preview-btn" 
                  onClick={(e) => openPreview(cert, e)}
                >
                  Preview Certificate
                </button>
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

      {/* Certificate Preview Dialog */}
      {showPreview && (
        <div className="certificate-preview-overlay" onClick={closePreview}>
          <div className="certificate-preview-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="certificate-preview-header">
              <h3>{previewCert.title}</h3>
              <button className="close-preview-btn" onClick={closePreview}>×</button>
            </div>
            <div className="certificate-preview-body">
              <div className="certificate-preview-image">
                <img src={getImageSrc(previewCert.image)} alt={`${previewCert.title} Certificate`} />
              </div>
              <div className="certificate-preview-details">
                <p className="certificate-preview-description">{previewCert.description}</p>
                <div className="certificate-preview-meta">
                  <p><strong>Issuer:</strong> {previewCert.issuer}</p>
                  <p><strong>Date:</strong> {previewCert.date}</p>
                </div>
              </div>
            </div>
            <div className="certificate-preview-footer">
              <button className="certificate-download-btn" onClick={() => window.open(getImageSrc(previewCert.image))}>
                View Full Size
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
