import React from 'react';
import './App.css';

const Recommendations = () => {
    return (
        <div className="recommendations-page">
            <section className="recommendations-header">
                <h1>Recommendations</h1>
                <p className="section-intro">
                    LinkedIn recommendations from professors and academic mentors who have
                    witnessed my academic journey, dedication, and professional growth.
                </p>
            </section>

            <section className="recommendations-content">
                <div className="recommendation-item">
                    <h2>Professor Recommendation</h2>
                    <div className="recommendation-badge">
                        <span className="platform-badge">📱 LinkedIn</span>
                    </div>
                    <div className="recommendation-image-container">
                        <img
                            src={`${import.meta.env.BASE_URL || '/'}recommendation.jpeg`}
                            alt="LinkedIn Recommendation from Professor"
                            className="recommendation-image"
                        />
                    </div>
                    <div className="recommendation-description">
                        <p>
                            This LinkedIn recommendation from my professor highlights my academic performance,
                            analytical thinking, and commitment to excellence in Digital Technologies and
                            Business Administration. It reflects my dedication to learning and professional development
                            throughout my university journey.
                        </p>
                        <div className="recommendation-actions">
                            <button
                                className="view-full-recommendation-btn"
                                onClick={() => {
                                    const baseUrl = import.meta.env.BASE_URL || '/';
                                    window.open(`${baseUrl}recommendation.jpeg`, '_blank');
                                }}
                            >
                                <span className="view-icon">🔍</span>
                                View LinkedIn Screenshot
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recommendations;
