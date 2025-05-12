import React from 'react';
import './App.css';

const activities = [
  {
    id: 1,
    title: "Sustainability Club – Cleanliness Campaign",
    role: "Social Media Head",
    date: "July 2024",
    description: "Collaborated with peers to organize a campus-wide cleanliness drive and awareness sessions on plastic use reduction. Designed informative posters and coordinated waste segregation workshops with local municipal support.",
    achievement: "Successfully helped improve student participation in eco-friendly practices, leading to a cleaner and more conscious campus environment.",
    icon: "🌱"
  },
  {
    id: 2,
    title: "Voguenze Fashion Club",
    role: "Active Member",
    date: "2023 - Present",
    description: "Participate in organizing fashion events and styling workshops for students. Collaborate with team members to coordinate fashion shows and promote fashion awareness.",
    achievement: "Contributed to building a vibrant fashion community on campus and helped organize a successful annual fashion show.",
    icon: "👗"
  },
  {
    id: 3,
    title: "Entrepreneurship Cell",
    role: "Member",
    date: "2022 - Present",
    description: "Engage in entrepreneurial initiatives, workshops, and startup incubation programs. Participate in ideation sessions and business plan competitions.",
    achievement: "Developed strong networking skills and gained practical insights into business development and entrepreneurship.",
    icon: "💼"
  },
  {
    id: 4,
    title: "Tussle - Sports Event",
    role: "Event Sub Head",
    date: "2023",
    description: "Coordinated and managed event logistics for a university-wide sports competition. Oversaw team registrations, scheduling, and venue management.",
    achievement: "Successful execution of a multi-day sports event with participation from over 200 students across departments.",
    icon: "🏆"
  }
];

const ExtraCurriculars = () => {
  return (
    <div className="extra-curriculars">
      <h1>Extra-Curricular Activities</h1>
      
      <p className="section-intro">
        Beyond academics, I actively participate in campus organizations and initiatives 
        that foster leadership, creativity, and social responsibility.
      </p>
      
      <div className="activities-timeline">
        {activities.map((activity, index) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              <div className="activity-header">
                <h2>{activity.title}</h2>
                <div className="activity-meta">
                  <span className="activity-role">{activity.role}</span>
                  <span className="activity-date">{activity.date}</span>
                </div>
              </div>
              
              <p className="activity-description">{activity.description}</p>
              
              <div className="activity-achievement">
                <h3>Achievement:</h3>
                <p>{activity.achievement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraCurriculars;
