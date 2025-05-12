import React from 'react';
import certificatesData from './certificatesData.json'; // Import the JSON data
import './App.css';

const Certificates = () => {
  return (
    <div className="certificates">
      <h1>Certificates</h1>
      {certificatesData.map((cert) => (
        <section key={cert.id} className="certificate-item">
          <h2>{cert.title}</h2>
          {/* Use require for images in Create React App or ensure they are in public folder and use direct path */}
          <img src={cert.image} alt={`${cert.title} Certificate`} />
          <p><strong>Issuer:</strong> {cert.issuer}</p>
          <p><strong>Date:</strong> {cert.date}</p>
        </section>
      ))}
    </div>
  );
};

export default Certificates;
