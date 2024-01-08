import React from "react";
import "./team.scss";
import { data } from "./TeamCard";
import Card from "./Card";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Team = () => {

  return (
    <>
      <div className="container main__team" id="our-team">
        <div className="head">
          <h1> Our Team </h1>
          <p>
            With over 5 years of combined experience, We've got a well seasoned
            team at Webwrite Inc.
          </p>
        </div>
        <div className="card__sections">
          {data.map((curElm, index) => (
            <div key={index}>
              <Card img={curElm.img} three={curElm.three} para={curElm.para} />
            </div>
          ))}
        </div>

        <div className="card__sections__mbl">
          <OwlCarousel
            items={4}
            autoplay={true}
            loop={true}
            margin={0}
            nav={false}
            smartSpeed={500}
            options={{
              dots: true,
            }}
            autoplayHoverPause={true}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
                items: 1,
              },
              1200: {
                items: 1,
              },
            }}
          >
            {data.map((curElm, index) => (
              <div key={index}>
                <Card
                  img={curElm.img}
                  three={curElm.three}
                  para={curElm.para}
                />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Team;
