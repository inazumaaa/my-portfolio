import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt=""></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>sfbvjhdbvbdfkjbvkdfsvkdfjls fkvbjfn sjgfvskdbvkjdfs fkjsgbkfd</p>
            <p>
              fskjvbdkbkjd jsfbgvhjvkjdfn fskjgbvfdhjdsn jkshgkfnv sjlghdfk
              vskjhgsfjv skjergfs,v ilrghs
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React js</p> <hr style={{ width: "70%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Spring Boot</p> <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Node js</p> <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>9+</h1>
          <p>Projects complted</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
