import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero-section/Hero';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';  // Projects component for homepage layout
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Contact from './pages/contact/Contact'; 
import ProjectsPage from './pages/projects/ProjectsPage';  // Projects page for routing

import { Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

function App() {
  return (
    <div>
      <Navbar />

      {/* Define Routes */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<><Hero /><Services /><Projects /><Testimonials /></>} />

        {/* Other page routes */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* Projects as a separate page */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
