import React, { useState, useEffect } from 'react';
import './App.css';

// Import all slideshow media
const slideshowMedia = [
  // Images
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.16.jpeg', import.meta.url).href,
    caption: '' 
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.18 (1).jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.18.jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.19 (1).jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.19.jpeg', import.meta.url).href,
    caption: '' 
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.20.jpeg', import.meta.url).href,
    caption: '' 
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.21.jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.24.jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.25.jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.26.jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.27 (1).jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.27.jpeg', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'image',
    src: new URL('./assets/slideshow/WhatsApp Image 2025-05-14 at 12.05.28.jpeg', import.meta.url).href,
    caption: ''
  },
  // Videos  
  { 
    type: 'video', 
    src: new URL('./assets/slideshow/WhatsApp Video 2025-05-14 at 12.05.17.mp4', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'video',
    src: new URL('./assets/slideshow/WhatsApp Video 2025-05-14 at 12.05.21.mp4', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'video',
    src: new URL('./assets/slideshow/WhatsApp Video 2025-05-14 at 12.05.22.mp4', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'video',
    src: new URL('./assets/slideshow/WhatsApp Video 2025-05-14 at 12.05.23.mp4', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'video',
    src: new URL('./assets/slideshow/WhatsApp Video 2025-05-14 at 12.05.29.mp4', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'video',
    src: new URL('./assets/slideshow/WhatsApp Video 2025-05-14 at 12.05.30.mp4', import.meta.url).href,
    caption: ''
  },
  { 
    type: 'video',
    src: new URL('./assets/slideshow/WhatsApp Video 2025-05-14 at 12.30.14.mp4', import.meta.url).href,
    caption: ''
  }
];

/* Second declaration removed */

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

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Auto-advance slides when playing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowMedia.length);
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  // Go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowMedia.length);
  };
  
  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowMedia.length) % slideshowMedia.length);
  };
  
  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const media = slideshowMedia[currentSlide];
  
  return (
    <div className="slideshow-container">
      <h2>Activity Gallery</h2>
      <div className="slideshow">
        <div className="slide">
          {media.type === 'image' ? (
            <img src={media.src} alt={`${media.caption || `Slide ${currentSlide + 1}`}`} />
          ) : (
            <video 
              src={media.src} 
              controls={!isPlaying} 
              autoPlay={isPlaying} 
              muted={isPlaying} 
              onEnded={nextSlide}
            />
          )}
        </div>
        
        {/* <div className="slide-caption">
          <p>{media.caption || `Slide ${currentSlide + 1}`}</p>
        </div> */}
        
        <div className="slideshow-controls">
          <button onClick={prevSlide}>❮ Previous</button>
          <button onClick={togglePlay}>{isPlaying ? '⏸️ Pause' : '▶️ Play'}</button>
          <button onClick={nextSlide}>Next ❯</button>
        </div>
        
        <div className="slideshow-info">
          {currentSlide + 1} / {slideshowMedia.length}
        </div>
      </div>
    </div>
  );
};

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
      
      {/* Activity Gallery Slideshow */}
      <Slideshow />
    </div>
  );
};

export default ExtraCurriculars;
