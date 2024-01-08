import React from "react";
import "./tesi.scss";
import { data } from "./TestiApi";
import "aos/dist/aos.css";
import linkedin from "../../assets/images/linkedin.svg";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  return (
    <>
      <div className="container main__testi">
        <h1> What the Founders say about us! </h1>

        <div className="card__section__testimonials">
          <OwlCarousel
            items={4}
            autoplay={true}
            loop={true}
            margin={0}
            nav={false}
            smartSpeed={800}
            options={{
              dots: true,
            }}
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
              <div className="card" key={index}>
                <div className="card__top">
                  <div className="card__top__left">
                    <img src={curElm.img} alt="img" />
                    <div>
                      <h4> {curElm.four} </h4>
                      <p> {curElm.para} </p>
                    </div>
                  </div>
                  <div className="card__top__right">
                    <Link to={curElm.link} target="_blank">
                      {" "}
                      <img src={linkedin} alt="img" />{" "}
                    </Link>
                  </div>
                </div>
                <div className="card__bottom">
                  <p> {curElm.desc} </p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
