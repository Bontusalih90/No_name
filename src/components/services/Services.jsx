import React, { useEffect } from 'react';
import './Services.css';
import { assets } from '../../assets/assets';

function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } 
    );

    cards.forEach((card) => observer.observe(card));

   
    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []); 
  return (
    <div className="Services-section">
      <h2>What We Provide</h2>
      <div className="card-section">
        <div className="card1 card hidden">
          <img src={assets.website} alt="Website Development" />
          <h4>Website Development</h4>
          <p>
            We create custom, responsive websites to boost your online presence. Our tailored solutions cover design to e-commerce, ensuring user-friendly, SEO-optimized sites that load fast and perform well. Build a successful website with us.
          </p>
        </div>
        <div className="card2 card hidden">
          <img src={assets.app} alt="Application Development" />
          <h4>Application Development</h4>
          <p>
            We provide advanced app development services to engage users and enhance operations. From mobile apps to custom software, we deliver high-performance, scalable solutions with intuitive design, seamless functionality, and strong security.
          </p>
        </div>
        <div className="card1 card hidden">
          <img src={assets.digital} alt="Digital Marketing Solutions" />
          <h4>Digital Marketing Solutions</h4>
          <p>
            We help businesses grow with tailored digital marketing strategies. From SEO and PPC to social media and content marketing, we drive traffic, boost conversions, and improve online visibility. Let us enhance your digital presence and achieve measurable results.
          </p>
        </div>
        <div className="card2 card hidden">
          <img src={assets.business} alt="Business Strategies" />
          <h4>Business Strategies</h4>
          <p>
            We provide expert business consulting to help you achieve growth and operational excellence. From strategy development to market insights, we ensure your business thrives in today's competitive landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
