import React from "react";
import "./Hero.css";
import profileImage from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImage} alt=""></img>
      <h1><span>Hello</span> I'm Rohan Solanki ,a backend developer</h1>
      <p>
        I have a strong focus on crafting resilient REST APIs tailored to
        diverse needs like application engines, API integrations, CRM, and
        middleware. 
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
