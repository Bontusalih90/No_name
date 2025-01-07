import React from 'react';
import './Hero.css'

import hero from '../../assets/images/hero-video.MP4'
function Hero() {
  return (
    <div className='hero-section'>
      <div className='hero'>
      <div className='hero-content'> 
         <h1>Yours Tech</h1>
         <h3>Your Vision is Our Mission</h3>
         <p>At Yours Tech, we provide all-in-one tech services designed to turn your vision into reality.  From custom websites and applications to digital marketing strategies and business consulting, we offer comprehensive solutions tailored to your needs</p>
         <button>Read More</button>
      </div>
      <div className="hero-video">
      <video className="hero-video" autoPlay loop muted>
         <source src={hero} type="video/mp4" /> Your browser does not support the video tag.
        </video>
      </div>
      </div>
    
    
    
    </div>
  )
}

export default Hero