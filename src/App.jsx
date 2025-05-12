import React from 'react';
// Update to use NavLink
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Certificates from './Certificates';
import ExtraCurriculars from './ExtraCurriculars';
import './App.css';

const App = () => {
  // Determine basename from package.json homepage or set to your repository name
  // Example: if homepage is "https://username.github.io/my-portfolio/", basename is "/my-portfolio"
  // Replace '/<repository-name>' with your actual repository name if deploying to a subpath on GitHub Pages
  const basename = process.env.NODE_ENV === 'production' ? '/<repository-name>' : '/';

  return (
    // Add basename to Router
    <Router basename={basename}>
      <div className="app">
        <nav className="navbar">
          <ul>
            {/* Use NavLink for automatic active class styling */}
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/certificates" className={({ isActive }) => isActive ? "active" : ""}>Certificates</NavLink></li>
            <li><NavLink to="/extra-curriculars" className={({ isActive }) => isActive ? "active" : ""}>Extra-Curriculars</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/extra-curriculars" element={<ExtraCurriculars />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
