import React from "react";
import "./simplicity.scss";
import { cardData } from "./card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "aos/dist/aos.css";

const Simplicity = () => {
  return (
    <>
      <div className="container main__simpli active__section" id="what-we-do">
        <div className="head">
          <h2> What we do! </h2>
          <p>
            We are technologists and entrepreneurs, so we understand both the
            technical and business challenges of creating digital products.
          </p>
        </div>
        <div className="cards__section">
          <OwlCarousel
            items={4}
            autoplay={true}
            loop={true}
            margin={0}
            nav={false}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
              1000: {
                items: 3,
              },
              1200: {
                items: 4,
              },
            }}
            className="carousel"
          >
            {cardData.map((curElm, index) => (
              <div className="card" key={index}>
                <img
                  src={curElm.icon}
                  alt="img"
                  style={{ backgroundColor: curElm.color }}
                />
                <h5> {curElm.five} </h5>
                <p className="card__text"> {curElm.para} </p>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Simplicity;
