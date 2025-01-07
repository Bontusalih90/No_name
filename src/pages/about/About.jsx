import React from 'react'
import './aboutPage.css'
import { assets } from '../../assets/assets'
function About() {
  return (
    <div className='about-page'>
        <h2>Who We Are</h2>
        <p>At <strong>YoursTech,</strong> we are more than just a tech solutions provider—we are your strategic partners in transforming visions into realities. Founded with a passion for innovation and an unwavering commitment to excellence, YoursTech specializes in delivering all-in-one technology solutions tailored to meet the unique needs of our clients</p>
        
        <div className="core-services">
            <h2>Our Core Services</h2>
            <div className="service">
                <div className="service-content">
                <h3>Website and Application Development</h3>
                <p>We design and develop cutting-edge <strong>websites</strong> and <strong>applications</strong>  that are not just visually appealing but also highly functional and user-friendly. From seamless e-commerce platforms to powerful mobile apps, we turn your ideas into digital masterpieces.</p>
                </div>
                <div className="service-image">
                    <img src={assets.webapp} alt="" />
                </div> 
            </div>
            <div className="service">
                <div className="service-content">
                <h3> Digital Marketing Solutions</h3>
                <p>In today’s digital age, visibility is everything. Our experts craft customized digital marketing strategies, including SEO, social media management, PPC campaigns, and content marketing, to ensure your brand reaches its target audience effectively.</p>
                </div>
                <div className="service-image">
                    <img src={assets.digital} alt="" height={300} width={300} />
                </div> 
            </div>
            <div className="service">
                <div className="service-content">
                <h3>Business Strategy Consulting</h3>
                <p>Beyond technology, we guide businesses to achieve sustainable growth. Our team offers tailored business strategies, market analysis, and innovative solutions that drive success and empower organizations to stay ahead in a competitive landscape.</p>
                </div>
                <div className="service-image">
                    <img src={assets.business} alt="" />
                </div> 
            </div>
        </div>
        
          <h2>Our Vision and Mission</h2>
          <p>At YoursTech, we live by our slogan:  <strong>“Your vision is our mission”</strong>  This isn’t just a tagline—it’s the foundation of everything we do. We take pride in understanding your goals and aligning our expertise to help you achieve them.</p>

          <h2>Why Choose YoursTech?</h2>

          <div className="why">
              <div className="why-image">
                <img src={assets.why} alt="" />
              </div>
              <div className="why-content">
                <h3>1. Customer-Centric Approach</h3>
                 <p>Your satisfaction is our priority. We collaborate closely with our clients, ensuring that every project reflects their unique vision and exceeds their expectations.</p>
                   <h3>2. Innovation and Expertise</h3>
                  <p>Combining cutting-edge technology with creative solutions, our team of professionals is dedicated to delivering results that redefine industry standards.</p>
            <h3>3. End-to-End Solutions</h3>
             <p>From ideation to execution and beyond, YoursTech provides a complete suite of services, so you never need to look elsewhere for support.</p>
             <h3>4. Adaptability</h3>
              <p>We understand that every client and industry is different. That’s why we take a flexible, personalized approach to cater to your specific needs.</p>
              </div>
          </div>
          <h2>Our Promise</h2>
          <p>At YoursTech, we don’t just build websites, apps, and strategies—we build trust and lasting partnerships. Whether you’re a startup looking for a launchpad or an established business seeking growth, we’re here to make your journey successful.</p>
          <p>When you choose YoursTech, you’re not just hiring a service provider—you’re gaining a dedicated team committed to turning your aspirations into achievements.</p>
          <strong>Let’s create the future together.</strong>
        
        </div>
  )
}

export default About