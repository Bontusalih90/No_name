import React from 'react';
import './App.css';
import './index.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero-section/Hero';
import Services from './components/services/Services';
import Projects from './components/projects/Projects'; 
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';       
import About from './pages/about/About';
import Contact from './pages/contact/Contact'; 
import ProjectsPage from './pages/projects/ProjectsPage';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
function App() {
  return (
    <div>
      <Router basename="/yourstech.net"> {/* Set basename here */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<><Hero /><Services /><Projects /><Testimonials /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
