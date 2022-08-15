import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

//images
import HeroImage from "../../assets/hero_image.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stoke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="">
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+1542</span>
            <span>memeber joined</span>
          </div>
          <div>
            <span>+59</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="heart" />
          <span>Heart Range</span>
          <span>116 ppm</span>
        </div>

        <img src={HeroImage} alt="heroimage" className="hero-image" />
        <img src={HeroImageBack} alt="heroimage" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
