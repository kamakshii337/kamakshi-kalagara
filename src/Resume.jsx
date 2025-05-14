import React from 'react';
import './App.css';

const Resume = () => {
  const personalInfo = {
    name: "Kamakshi Keerthana Kalagara",
    address: "Lansum Etania complex near future kids school, puppalaguda",
    postalCode: "500089, Telangana, India",
    phone: "+91-9959037727",
    email: "Kamakshi.kalagara@gmail.com",
    dob: "7th October, 2004",
    languages: "English, Telugu, and Hindi",
    interests: "Travelling, Dancing, Photography"
  };

  const education = [
    {
      degree: "Bachelor of Business Administration in Digital Technologies",
      institution: "Mahindra University, Telangana",
      period: "August 2022 - May 2025",
      score: "CGPA – 6.14/10 (until the 6A Semester)"
    },
    {
      degree: "12th Grade (ISE Board)",
      institution: "The Future kids, Andhra pradesh",
      period: "March 2021 - July 2022",
      score: "79.8%"
    },
    {
      degree: "10th Grade (ICSE Board)",
      institution: "The Future kids, Andhra Pradesh",
      period: "March 2019 - July 2020",
      score: "78.4%"
    }
  ];

  const certifications = [
    {
      title: "Macroeconomics for Business Management course",
      institution: "Mahindra University | Coursera",
      date: "March 2023"
    },
    {
      title: "Digital Marketing Course",
      institution: "Udemy",
      date: "April 2025"
    }
  ];

  const workExperience = [
    {
      position: "Human Resources",
      company: "GSS INFOTECH, Hyderabad",
      period: "2025",
      responsibilities: [
        "Managed end-to-end recruitment processes, including sourcing, screening, and interviewing candidates to ensure alignment with organizational needs.",
        "Collaborated with department heads to understand workforce requirements, creating tailored hiring strategies to attract top talent.",
        "Ensured compliance with employment laws and company policies during the hiring process, fostering transparency and trust.",
        "Optimized onboarding procedures, improving new hire integration and satisfaction while maintaining high retention rates."
      ]
    }
  ];

  const activities = [
    "Voguenze Fashion Club Member | Mahindra University",
    "Entrepreneurship Cell Member | Mahindra University",
    "Social Media Head for Sustainability club | Mahindra University",
    "Event Sub Head, Tussle- sports event | Mahindra University"
  ];

  const extraActivities = [
    {
      title: "Sustainability club – cleanliness campaign",
      date: "July 2024",
      description: "Collaborated with peers to organize a campus-wide cleanliness drive and awareness sessions on plastic use reduction. Designed informative posters and coordinated waste segregation workshops with local municipal support. Successfully helped improve student participation in eco-friendly practices, leading to a cleaner and more conscious campus environment."
    }
  ];

  const skills = {
    technical: ["MS Word", "MS Excel", "MS PowerPoint", "Altair AI", "Python (basics)", "Power BI (basics)", "Studio (basics)", "Tally (basics)"],
    soft: ["Communication", "Interpersonal", "Leadership", "Team Player", "Time Management", "Multi-Tasking", "Critical Thinking", "Logical Acumen", "Problem Solving", "Focused", "Diligent", "Determined"]
  };

  const handleDownloadResume = () => {
    // Get the base URL for the application (handles both development and production)
    const baseUrl = import.meta.env.BASE_URL || '/';
    
    // Use the file from the public directory which is always accessible at the root
    const resumeFilePath = `${baseUrl}resume.docx`;
    
    window.open(resumeFilePath, '_blank');
  };

  return (
    <div className="resume-page">
      <section className="resume-header">
        <h1>Resume</h1>
        <p className="section-intro">
          My professional background and qualifications in Business Administration with Digital Technologies.
        </p>
        <div className="resume-actions">
          <button className="download-resume-btn" onClick={handleDownloadResume}>
            <span className="download-icon">📄</span>
            Download Resume
          </button>
        </div>
      </section>

      <section className="resume-personal-info">
        <h2>Personal Information</h2>
        <div className="personal-info-grid">
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span className="info-value">{personalInfo.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Address:</span>
            <span className="info-value">{personalInfo.address}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Postal Code:</span>
            <span className="info-value">{personalInfo.postalCode}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone:</span>
            <span className="info-value">{personalInfo.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{personalInfo.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Date of Birth:</span>
            <span className="info-value">{personalInfo.dob}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Languages:</span>
            <span className="info-value">{personalInfo.languages}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Interests:</span>
            <span className="info-value">{personalInfo.interests}</span>
          </div>
        </div>
      </section>

      <section className="resume-education">
        <h2>Educational Qualifications</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>Degree/Board</th>
              <th>Institution</th>
              <th>Year</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <tr key={index}>
                <td>{edu.degree}</td>
                <td>{edu.institution}</td>
                <td>{edu.period}</td>
                <td>{edu.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="resume-certifications">
        <h2>Trainings and Certifications</h2>
        <ul className="certifications-list">
          {certifications.map((cert, index) => (
            <li key={index}>
              <div className="certification-item">
                <strong>{cert.title}</strong> | {cert.institution} | {cert.date}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-experience">
        <h2>Work Experience</h2>
        {workExperience.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <h3>{exp.position} | {exp.company}</h3>
              <span className="experience-period">{exp.period}</span>
            </div>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-activities">
        <h2>Co-Curricular Activities</h2>
        <ul className="activities-list">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section className="resume-extra-activities">
        <h2>Extra-Curricular Activities</h2>
        {extraActivities.map((activity, index) => (
          <div className="extra-activity-item" key={index}>
            <div className="activity-header">
              <h3>{activity.title}</h3>
              <span className="activity-date">{activity.date}</span>
            </div>
            <p className="activity-description">{activity.description}</p>
          </div>
        ))}
      </section>

      <section className="resume-skills">
        <h2>Technical and Soft Skills</h2>
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-tags">
              {skills.technical.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="skills-tags">
              {skills.soft.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
