import React from "react";
import "./hero.scss";
import { heroTwo } from "../../assets/index";

const HeroSection = () => {
  return (
    <>
      <div className="main__hero">
        <div className="container">
          <div className="main__hero__content">
            <div className="left__content">
              <h1>We Engineer Intelligent Software Products</h1>
              <p>
                WebWrite Inc. is a one-stop IT service provider that will take
                care of all your mobile and web application development needs.
              </p>
              <div className="her__buttons">
                <a
                  href={`mailto:sales@webwrite.co`}
                >
                  <button className="touch"> Get in touch </button>
                </a>
                <a href="#portfolio">
                  <button className="works"> Our work </button>
                </a>
              </div>
            </div>
            <div className="right__content">
              <div className="heroTwo">
                <img src={heroTwo} alt="img" />
              </div>
              <div className="her__buttons__mbl">
                <a
                  href={`mailto:sales@webwrite.co`}
                >
                  <button className="touch"> Get in touch </button>
                </a>
                <a href="#portfolio">
                  <button className="works"> Our work </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
