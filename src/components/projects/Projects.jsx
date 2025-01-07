import React from 'react';
import './Projects.css';
import { assets } from '../../assets/assets';

function Projects() {
  return (
    <div className='projects-section'>
        <h1>Some of Our Projects</h1>
    <div className="project">
        <div className="background-img1"> 
        <a href="https://informativers.com/"><img src={assets.informativers} alt="" /></a>
        <div className="pro-content">
        <h4>Informativers</h4>
        <a href="https://informativers.com/">View Detail</a>
        </div>
      </div>
        <div className="background-img1"> 
        <a href="https://yegnajob.com//"><img src={assets.yegnajob} alt="" /></a>
        <div className="pro-content">
        <h4>Yegna Job</h4>
        <a href="https://yegnajob.com/">View Detail</a>
        </div>
      </div>
     
    <div className="background-img1"> 
        <a href="https://jaalaladhugaa.com/"><img src={assets.jalaladhuga} alt="" /></a>
        <div className="pro-content">
        <h4>Jalala Dhugaa</h4>
        <a href="https://jaalaladhugaa.com/">View Detail</a>
        </div>
      </div>
      <div className="background-img1"> 
        <a href="https://abdiiluccee.com/"><img src={assets.abdilucce} alt="" /></a>
        <div className="pro-content">
        <h4>Abdii Luuccee</h4>
        <a href="https://abdiiluccee.com/">View Detail</a>
        </div>
      </div>
      <div className="background-img1"> 
        <a href="https://bontusalih90.github.io/Eluha-store/">
        <img src={assets.eluhastore} alt="" /></a>
        <div className="pro-content">
        <h4>Shopping Store</h4>
        <a href="https://bontusalih90.github.io/Eluha-store/">View Detail</a>
        </div>
     </div>
     <div className="background-img1"> 
        <a href="https://bontusalih90.github.io/Babi-s-Coffee/"><img src={assets.babis} alt="" /></a>
        <div className="pro-content">
            <h4>Babi-s-Coffee</h4>
            <a href="https://bontusalih90.github.io/Babi-s-Coffee/">View Detail</a>
            </div>
     </div>
    </div>
    <div className="marque">
      <h2 >Join Our Happy Clients </h2>
    <marquee behavior="scroll" direction="left">
    <img src={assets.abdilogo} alt="Scrolling Image" width="50" height="50" />
    <img src={assets.ziadlogo} alt="Scrolling Image" width="50" height="50" />
    <img src={assets.jalalalogo} alt="Scrolling Image" width="" height="50" /> 
    <img src={assets.babislogo} alt="Scrolling Image" width="50" height="50" />
    <img src={assets.eluhalogo} alt="Scrolling Image" width="50" height="50" />
    <img src={assets.yegnalogo} alt="Scrolling Image" width="50" height="50"/>
    
  </marquee>
    </div>
    
    </div>
  )
}

export default Projects